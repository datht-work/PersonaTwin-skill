# PersonaTwin: Hướng dẫn Sử dụng & Playbook Chiến lược

Tài liệu này không chỉ hướng dẫn cách dùng lệnh, mà là một **Playbook Chiến lược**. Bạn sẽ học cách dùng PersonaTwin để: (A) Tránh code sai tính năng, và quan trọng nhất (B) **Dò tìm ngách thị trường (Product-Market Fit) cho một App/Sản phẩm đang chạy.**

---

## 💡 Cách Kích Hoạt PersonaTwin

Vì PersonaTwin là một AI skill, cách gọi lệnh sẽ phụ thuộc vào môi trường bạn dùng:

- **IDE AI (Cursor, Windsurf, Copilot, v.v.)**: Gọi tên agent và dùng lệnh (vd: `@personatwin @build-persona ...`).
- **Tác nhân CLI (Claude Code, Cline, v.v.)**: Giao tiếp bằng ngôn ngữ tự nhiên (vd: "Hãy dùng personatwin để `@build-persona`...").
- **ChatGPT / Claude Web**: Dán file `SKILL.md` vào ngữ cảnh và gõ trực tiếp lệnh.

---

## ⚡ Bảng Lệnh Nhanh (Cheat Sheet)

| Lệnh | Use Case Chính |
|---|---|
| `@build-persona [thông tin]` | Tạo người dùng, phân loại Early Adopter. Ép cắt nhỏ tập khách hàng quá rộng. |
| `@momtest [ý tưởng/app]` | Pitch tính năng/app để nhận phản hồi "phức tạp, từ chối, hoặc đòi hỏi". |
| `@summarize [nội dung]` | Lọc sự thật từ file meeting. Xóa bỏ lời khen (Fluff). |
| `@coach [câu hỏi]` | Chấm điểm kịch bản interview sale/CSKH của bạn xem có dính lỗi dẫn dắt không. |
| `@interview-plan` | Tự động tạo 5 câu hỏi chuẩn Mom Test cho Persona hiện tại. |
| `@dig-deeper` | Đào sâu (5-Whys) sau khi `@momtest` tìm ra một vết xước để tìm Nỗi Đau Gốc. |
| `@final-summary` | Chốt hạ Data thành Dashboard chiến lược (Bỏ đối tượng A, đánh đối tượng B). |
| `@learning-log` | Nhật ký học hỏi sau phỏng vấn (gom theo tính năng, không theo người). |

---

## 🎯 PLAYBOOK 1: Tìm Tập Khách Hàng Cho "App Đang Chạy" (Product-Market Fit)

*App của bạn đã code xong, có tính năng rất hay, nhưng ném ra thị trường không ai xài. Lỗi do bạn bán sai tập khách hàng. Hãy dùng quy trình 5 bước sau để dò tìm "Niche Market" (Thị trường ngách):*

### Bước 1: Slicing (Chia nhỏ tập khách hàng)

Đừng test với đại chúng. Hãy tạo 3 Persona thuộc 3 ngách hoàn toàn khác biệt trên cùng 1 thị trường.

1. `@build-persona Chủ quán cafe trẻ, 28 tuổi, rành công nghệ, ở Quận 1, Việt Nam`
2. `@build-persona Chủ tiệm tạp hóa, 50 tuổi, chỉ xài Zalo, ở ngoại ô, Việt Nam`
3. `@build-persona Quản lý chuỗi F&B 10 cơ sở, quan tâm quản trị dòng tiền`

### Bước 2: The Core Pitch (Test luồng chức năng)

Đưa tính năng cốt lõi của App bạn cho từng Persona bằng lệnh `@momtest`:
> `@momtest "Bên em có tính năng quét mã vạch trên app để tự động lên báo cáo xuất nhập tồn trong 3 giây."`

### Bước 3: Đọc vị Switching Cost (Chi phí chuyển đổi)

PersonaTwin sẽ trả về phản ứng thật. Bạn KHÔNG tìm người khen "App hay", bạn tìm người có **Pain Alignment = ✅** và **Switching Cost = 🟢 (Thấp)**.

- *Persona 2 (Bác 50 tuổi)* sẽ phản bác: "Bác ghi sổ tay cho nhanh, mắt mờ rồi quét mã gì." (Bỏ tập khách này).
- *Persona 3 (Chuỗi F&B)* sẽ phản bác: "Bên anh xài Oracle rồi, phần mềm em có liên thông dữ liệu được không?" (Tập khách này đòi hỏi quá cao).

### Bước 4: Đào sâu tìm Content Marketing

Giả sử Persona 1 (Chủ quán trẻ) bảo: "Cũng được, cuối ngày em hay bị lệch tiền kho". Khoan sâu ngay lập tức:
> `@dig-deeper`

PersonaTwin sẽ tung kỹ thuật 5-Whys để lật mở việc chủ quán mất 2 tiếng mỗi đêm dò lại file Excel. **Đó chính là câu Headline chạy Ads của bạn!**

### Bước 5: Chốt hạ Chiến lược

Chạy lệnh chốt sổ:
> `@final-summary`

Hệ thống sẽ lập bảng chỉ ra: Tập khách đáng đánh nhất là "Chủ shop trẻ 1 cơ sở". Bạn vừa tiết kiệm được hàng chục triệu đồng chạy Ads sai tập khách.

---

## 🛠 PLAYBOOK 2: Thẩm Định Tính Năng Mới (Trước Khi Code)

*Bạn có ý tưởng mới. Đừng code vội. Hãy kiểm chứng.*

### Bước 1: Lọc Sự Thật từ Data Cũ

Nếu bạn vừa đi cafe hỏi ý kiến khách hàng về ý tưởng, hãy ném đoạn ghi âm cho AI:
> `@summarize "[Đoạn ghi âm khách khen ý tưởng]"`
> PersonaTwin sẽ vạch trần: Khách khen vì lịch sự, thực tế họ chưa bao giờ bỏ tiền mua giải pháp tương tự trong quá khứ.

### Bước 2: Chuẩn bị kịch bản phỏng vấn

Để tránh mắc lỗi khi gặp khách thật, hãy bắt AI viết kịch bản:
> `@build-persona CFO 45 tuổi, B2B SaaS`
> `@interview-plan`
> Sinh ra 5 câu hỏi đào sâu về Nỗi Đau Quá Khứ, thay vì câu hỏi "Anh có thích tính năng này không?".

### Bước 3: Diễn tập & Chấm điểm

Nếu bạn tự viết câu hỏi, hãy nhờ AI chấm điểm:
> `@coach [Danh sách câu hỏi của bạn]`
> Nhận đánh giá xem câu nào vi phạm nguyên tắc thiên kiến.

---

## 🚨 Khắc phục App "Ế": Nhận diện 5 Anti-Pattern Trí Mạng

Nếu App bạn ế, hãy chạy lệnh `@momtest` và pitch đúng câu mà đội Sale của bạn đang dùng. Nếu hệ thống báo đỏ một trong các lỗi sau, bạn đã biết tại sao mình thất bại:

1. **Feature Dumping**: Ném 5 tính năng vào mặt khách (Persona sẽ chửi: "Rối quá, nói cái gì giúp tôi thôi").
2. **Future Tense Trap**: "Anh sẽ dùng tính năng này chứ?" (Câu hỏi dẫn dắt sai lầm).
3. **Vanity Metrics**: "Bên em có 100k downloads" (Persona: "Bao nhiêu người trả tiền?").
4. **Solution First**: Mở mồm ra là "Sản phẩm em có AI..." mà chưa hỏi khách hàng đang đau ở đâu.

---

## 🌏 Cấu hình Nâng cao: Đánh Chiếm Thị trường Mới (Regional Rules)

PersonaTwin chứa bộ DNA của **7 khu vực** và **6 ngành** đặc thù. Khi bạn ném App hiện tại sang thị trường khác, hãy set Region để test Product-Market Fit quốc tế.

| Vùng/Ngành | Setup trong Persona | Hệ quả khi chạy `@momtest` |
|---|---|---|
| **Việt Nam 🇻🇳** | `Vietnam` | Khách siêu nhạy cảm về giá, check Zalo-first, thích hàng miễn phí. |
| **Nhật/Hàn 🇯🇵** | `Japan` | Đòi hỏi Consensus (nemawashi) - tốn 6 tháng để chốt deal, yêu cầu văn phòng nội địa. |
| **LATAM 🌎** | `Brazil` / `LATAM` | Mọi nghiệp vụ phải nằm trên WhatsApp, rủi ro lạm phát cao. |
| **Châu Âu 🇪🇺** | `Europe` / `Germany`| Hỏi giấy phép GDPR đầu tiên. Tốn 12 tuần chỉ để team Legal duyệt App của bạn. |
| **SaaS B2B 💻**| `SaaS B2B` | Cực gắt về TCO (Total Cost of Ownership) và ROI. Chuyên so sánh với HubSpot. |
| **FinTech 🏦** | `FinTech` | Zero-trust. Đòi hỏi báo cáo an ninh mạng (SOC2, Pen-test) trước khi nói chuyện. |

**Ví dụ Test Xuyên Biên Giới:**

1. `@build-persona Chủ quán cafe, 32 tuổi, Bangkok, Thái Lan`  → Pitch App.
2. `@build-persona Chủ quán cafe, 32 tuổi, Jakarta, Indonesia` → Pitch App.
3. `@final-summary` → Xác định rào cản ở Thái khác gì Indo để tinh chỉnh App.

---

## ⚙️ Tùy Chỉnh Kỹ Thuật (Cho Dev/QA)

Nếu bạn là kỹ sư AI tích hợp hệ thống nội bộ:

1. **Custom Rules**: Cấy lệnh `Quy tắc: Luôn giả định người dùng xài phần mềm SAP` vào context trước khi chạy lệnh.
2. **Automated Validation**: Benchmark phiên bản của bạn với Promptfoo.

   ```bash
   npm run test
   ```

   (Chạy 20 test cases bao trùm: Chống khen ngợi, Đòi hỏi Commit thật, Phản đối theo quốc gia, Focus thì Quá khứ, v.v.)

---

## ⚠️ 8 Quy Tắc Sống Còn Mọi Product/Biz Phải Nhớ

1. **KHÔNG BAO GIỜ TỰ MÃN VỚI LỜI KHEN**: PersonaTwin được code để không bao giờ tung hô bạn. Khen = Dữ liệu Rác.
2. **Thói quen cũ (Status Quo) là Tử thần**: Đối thủ không phải là App khác, đối thủ là cuốn Sổ Tay và bảng Excel.
3. **Giá trị = Mức độ rũ bỏ**: Khách hàng chỉ xài App của bạn nếu sự sung sướng kiếm được lớn hơn độ lười biếng khi phải học cách dùng nó.
4. **Mốc thời gian - QUÁ KHỨ CÓ THẬT**: "Tuần trước anh làm việc này mất bao lâu?" >> "Anh có nghĩ tính năng này sẽ tiết kiệm thời gian không?".

*Hãy dùng PersonaTwin như một bao cát. Cứ đấm mọi ý tưởng điên rồ vào đó, để nó dội ngược lại những sự thật tàn khốc nhất.*

---
<small>PersonaTwin Team · Playbook Version 3.0.0 · Tháng 4/2026</small>
