const fs = require('fs');
const path = require('path');

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: personatwin <command> <input> [--persona <persona>]");
    console.log("Example: personatwin @momtest 'I want to build a QR loyalty app' --persona 'SaaS B2B'");
    process.exit(1);
  }

  const command = args[0];
  const input = args[1];
  let persona = "Default";

  const personaIndex = args.indexOf('--persona');
  if (personaIndex !== -1 && args.length > personaIndex + 1) {
    persona = args[personaIndex + 1];
  }

  const provider = process.env.PROVIDER || 'openai';
  const apiKey = provider === 'openai' ? process.env.OPENAI_API_KEY : process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error(`Error: API Key for provider '${provider}' is missing. Please set OPENAI_API_KEY or ANTHROPIC_API_KEY.`);
    process.exit(1);
  }

  // Load SKILL.md for system prompt
  const skillPath = path.join(__dirname, '../../SKILL.md');
  let systemPrompt = "You are PersonaTwin. Be a ruthless product reviewer using The Mom Test.";
  try {
    systemPrompt = fs.readFileSync(skillPath, 'utf8');
  } catch (err) {
    console.warn("Warning: Could not read SKILL.md. Using default prompt.");
  }

  const prompt = `Command: ${command}\nInput: ${input}\nPersona: ${persona}\n\nPlease execute the command based on your instructions.`;

  console.log(`🤖 Running ${command} against persona: ${persona}...\n`);

  try {
    if (provider === 'openai') {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      if (data.error) {
        console.error("OpenAI API Error:", data.error.message);
      } else {
        console.log(data.choices[0].message.content);
      }

    } else if (provider === 'anthropic') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 2000,
          system: systemPrompt,
          messages: [
            { role: "user", content: prompt }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      if (data.error) {
        console.error("Anthropic API Error:", data.error.message);
      } else {
        console.log(data.content[0].text);
      }
    }
  } catch (error) {
    console.error("Error calling LLM:", error.message);
  }
}

main();
