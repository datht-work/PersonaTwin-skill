# PersonaTwin: Hướng dẫn Sử dụng (User Guide)

Tài liệu này cung cấp hướng dẫn chi tiết cách sử dụng kỹ năng **PersonaTwin** để giả lập người dùng và kiểm chứng ý tưởng sản phẩm theo nguyên tắc "The Mom Test".

---

## 💡 Cách Kích Hoạt PersonaTwin

Vì PersonaTwin là một AI skill, cách gọi lệnh sẽ phụ thuộc vào môi trường bạn dùng:

- **IDE AI (Cursor, Windsurf, Copilot, v.v.)**: Gọi tên agent và dùng lệnh (vd: `@personatwin @build-persona ...`).
- **Tác nhân CLI (Claude Code, Amp, Cline, v.v.)**: Giao tiếp bằng ngôn ngữ tự nhiên (vd: "Hãy dùng personatwin để `@build-persona`...").
- **ChatGPT / Claude Web**: Dán file `SKILL.md` vào ngữ cảnh và gõ trực tiếp lệnh (vd: `@build-persona ...`).

---

## ⚡ Bảng lệnh nhanh (Cheat Sheet)

| Lệnh | Hành động / Hành vi |
|---|---|
| `@build-persona [thông tin]` | **Xây dựng Persona**: Tạo một người dùng ảo chi tiết dựa trên khung 5P Framework + phân loại Early Adopter. |
| `@momtest [ý tưởng/tính năng]` | **Kiểm thử Mom Test**: Đưa ý tưởng ra trước Persona để nhận phản hồi "phũ phàng" và trung thực + Commitment Score. |
| `@summarize [nội dung]` | **Lọc sự thật (Truth Filter)**: Trích xuất hành vi thực tế từ bản ghi phỏng vấn. Gắn nhãn tất cả dữ liệu xấu: Lời khen, Fluff, Giả thuyết. Gắn cờ Idea Signals. |
| `@coach [câu hỏi phỏng vấn]` | **Chỉnh sửa câu hỏi**: Chấm điểm các câu hỏi phỏng vấn theo tiêu chuẩn Mom Test. Xuất bảng Pass/Fail + bản viết lại. |
| `@dig-deeper` | **Đào sâu nguyên nhân gốc**: Tiếp tục khoan sau khi `@momtest` phát hiện tín hiệu nỗi đau. Dùng kỹ thuật 5-Whys. |
| `@interview-plan` | **Lập kế hoạch phỏng vấn**: Tạo 5 câu hỏi tuân thủ Mom Test cho persona hiện tại + câu hỏi commitment + danh sách câu hỏi cần tránh. |
| `@learning-log` | **Nhật ký học hỏi**: Tổng hợp phát hiện sau phỏng vấn. Cấu trúc theo chủ đề (không theo người), theo dõi cam kết và câu hỏi còn mở. |
| `@final-summary` | **Báo cáo tổng kết**: Tạo bảng tổng hợp cuối phiên với tất cả các verdict, phát hiện và khuyến nghị chiến lược. |
| `@safeai lang [Ngôn ngữ]` | **Đa ngôn ngữ**: Chuyển đổi ngôn ngữ phản hồi (mặc định tự nhận diện). |

---

## 🟢 1. Quy trình làm việc (Workflow)

### Bước 1: Thu thập dữ liệu & Lọc sự thật

Sử dụng lệnh `@summarize` khi bạn có bản ghi phỏng vấn thô. PersonaTwin sẽ loại bỏ những lời khen sáo rỗng và chỉ giữ lại những gì người dùng **đang làm** hoặc **đã làm**.

> `@summarize "Người dùng nói: Sản phẩm của bạn rất hay, tôi sẽ mua nếu có thêm tính năng X. Hiện tại tôi đang dùng Excel để quản lý."`
> **Kết quả**: PersonaTwin sẽ chỉ ra rằng ý tưởng "tính năng X" chỉ là giả thuyết, hành vi thực tế là "đang dùng Excel".

### Bước 2: Xây dựng Persona (5P Framework)

Sử dụng lệnh `@build-persona` để tạo một đối tượng giả lập. Bạn nên cung cấp thông tin nhân khẩu học cơ bản.

> `@build-persona Chủ cửa hàng tạp hóa tại Việt Nam, 45 tuổi, ít rành công nghệ.`

PersonaTwin sẽ tạo ra một **Persona Card** có cấu trúc với Profile, Psychology, Pains & Gains, Proficiency và Principles, kèm phân loại 🟢 Early Adopter / 🟡 Mainstream / 🔴 Laggard.

### Bước 3: Giả lập phản hồi (Mom Test Simulation)

Sử dụng lệnh `@momtest` để kiểm tra ý tưởng của bạn.

> `@momtest "Tôi muốn làm một ứng dụng tích điểm 5 bước cho cửa hàng của bạn."`
> **PersonaTwin**: "Tôi không có thời gian cho 5 bước. Tôi còn bận trông tiệm. Hiện tại tôi chỉ nhớ mặt khách rồi bớt cho họ 2-3 nghìn cho nhanh."

---

## 🟡 2. Preset theo Ngành

PersonaTwin có các quy tắc hành vi persona được cấu hình sẵn cho 6 ngành dọc. Khi bạn tạo persona từ một ngành cụ thể, skill sẽ tự động tải quy tắc hành vi phù hợp.

| Ngành | Tư duy Persona | Kiểu phản đối mặc định |
|-------|----------------|------------------------|
| **SaaS B2B** | CFO / Ops Manager. Tập trung ROI. | "TCO là bao nhiêu? Chúng tôi đã trả cho HubSpot rồi." |
| **F&B / Bán lẻ** | Chủ shop. Tập trung dòng tiền. | "Tôi không có thời gian học phần mềm mới." |
| **FinTech** | Né rủi ro. Tuân thủ trước tiên. | "Có đạt chuẩn không? Audit thì sao?" |
| **EdTech** | Giáo viên quá tải. Hoài nghi. | "Tôi đã thấy 10 app như vậy rồi. App nào cũng chết." |
| **Consumer App** | End user. 3 giây chú ý. | "Tôi đã có app cho việc đó rồi. Tải thêm chi?" |
| **Security** | CISO. Zero-trust. | "Dữ liệu lưu ở đâu? Cho xem báo cáo SOC2." |

### Ví dụ: Persona SaaS B2B

> `@build-persona CFO công ty SaaS 50 người, Singapore, data-driven`
> Sau đó: `@momtest "Công cụ dự báo doanh thu bằng AI"`
> PersonaTwin sẽ phản hồi với các phản đối về ROI/TCO và tham chiếu đến công cụ hiện có như HubSpot.

---

## 🔴 3. Phát hiện Anti-Pattern

PersonaTwin tự động phát hiện khi pitch của bạn chứa các lỗi PM thường gặp:

| Anti-Pattern | Biểu hiện | Phản ứng PersonaTwin |
|-------------|-----------|---------------------|
| **Feature Dumping** | Liệt kê 3+ tính năng cùng lúc | "Bạn làm tôi rối ở tính năng thứ 2. Chỉ nói về cái giúp tôi thôi." |
| **Solution First** | Mô tả giải pháp mà không hỏi về vấn đề | "Khoan — bạn đang giải quyết vấn đề gì?" |
| **Future Tense Trap** | "Bạn sẽ dùng nếu..." | "Tôi không biết tôi sẽ làm gì. Nhưng tuần trước tôi..." |
| **Vanity Metrics** | "Chúng tôi có 50,000 lượt tải" | "Tải về chẳng có nghĩa gì. Bao nhiêu người trả tiền?" |
| **Competitor Comparison** | "Giống Grab nhưng cho X" | "Tôi không dùng Grab cho X. Tôi gọi chị Tư." |
| **Premature Scaling** | "Nhắm 10 triệu user ở ĐNA" | "Tuyệt. Nhưng nó có hoạt động cho tiệm TÔI không?" |

---

## 🔵 4. Nâng cao: So sánh Multi-Persona

Kiểm thử cùng một tính năng với nhiều persona để xác nhận phân khúc thị trường:

1. `@build-persona Chủ quán cafe trẻ, 28 tuổi, rành công nghệ`
2. `@momtest "Hệ thống hóa đơn điện tử"` — ghi nhận phản ứng
3. `@build-persona Chủ tiệm thuốc, 55 tuổi, truyền thống, Hà Nội`
4. `@momtest "Hệ thống hóa đơn điện tử"` — so sánh phản ứng

Khi hai persona phản ứng rất khác nhau, bạn đã phát hiện **ranh giới phân khúc**. Xem [multi_persona_demo.md](examples/multi_persona_demo.md) để xem ví dụ đầy đủ.

---

## 🌏 5. Ngữ cảnh Quốc gia / Khu vực (Hướng dẫn từng bước)

PersonaTwin có khả năng tải các quy tắc hành vi theo quốc gia và khu vực để giúp persona của bạn chính xác với thị trường địa phương. Mỗi nước có công cụ khác nhau, tín hiệu tin tưởng riêng, và độ nhạy cảm với giá cả rất khác nhau.

### Bước 1: Chỉ định Quốc gia / Khu vực trong `@build-persona`

Thêm thông tin địa lý vào nhân khẩu học của persona:

> `@build-persona Chủ tiệm ăn, 40 tuổi, Việt Nam, F&B, ít rành công nghệ`
> `@build-persona CFO công ty SaaS 50 người, 45 tuổi, Singapore, data-driven`
> `@build-persona Quản lý hiệu thuốc, 50 tuổi, Đức, FinTech-adjacent`

### Bước 2: PersonaTwin tải quy tắc Khu vực

Ngữ cảnh khu vực được tự động áp dụng:

| Khu vực | Hành vi chính được tải |
|---------|----------------------|
| **Việt Nam 🇻🇳** | Công cụ Zalo-first, nhạy giá cao, tin tưởng qua giới thiệu bạn bè, chuyển từ tiền mặt sang digital |
| **Đông Nam Á 🌏** | Super-app chiếm ưu thế (Grab/Shopee), ví điện tử địa phương, luật lệ phân mảnh theo từng nước |
| **Nhật / Hàn 🇯🇵🇰🇷** | Ra quyết định theo đồng thuận (nemawashi), LINE/KakaoTalk, ưu tiên chất lượng hơn tốc độ |
| **LATAM 🌎** | WhatsApp cho mọi việc, PIX/OXXO, rất nhạy cảm về giá, LGPD (Brazil) |
| **Mỹ 🇺🇸** | Sẵn sàng trả tiền nếu ROI rõ ràng, yêu cầu SOC2/tuân thủ, mua hàng nhiều bên tham gia |
| **Châu Âu 🇪🇺** | GDPR-first, chủ quyền dữ liệu là then chốt, pháp lý kiểm tra mất 6-12 tuần |
| **Châu Phi / Trung Đông 🌍** | Gulf = prestige + Vision 2030; Châu Phi = M-Pesa/offline-first/feature phones |

### Bước 3: Chạy `@momtest` — Phản hồi theo Khu vực

Simulation sẽ bao gồm các phản đối và công cụ đặc thù theo khu vực:

> `@momtest "Bảng analytics cho đội ngũ kinh doanh của bạn"`
>
> — Persona **Việt Nam**: *"Giá bao nhiêu? 500 nghìn/tháng? Nhiều quá. Giờ team tôi chỉ dùng Zalo để báo target hàng ngày."*
> — Persona **Singapore**: *"Có chứng chỉ SOC2 chưa? Lấy đưa cho team compliance chúng tôi xem trước khi thử."*

### Bước 4: Chạy nhiều quốc gia để so sánh thị trường

Test cùng một ý tưởng qua nhiều khu vực để tìm thị trường phù hợp nhất:

1. `@build-persona Chủ quán cafe, 32 tuổi, TP. Hồ Chí Minh, Việt Nam`
2. `@momtest "Một ứng dụng tích điểm cho quán cafe của bạn"`
3. `@build-persona Chủ quán cafe, 32 tuổi, Bangkok, Thái Lan`
4. `@momtest "Một ứng dụng tích điểm cho quán cafe của bạn"`
5. `@build-persona Chủ quán cafe, 32 tuổi, Jakarta, Indonesia`
6. `@momtest "Một ứng dụng tích điểm cho quán cafe của bạn"`

### Bước 5: Tạo bảng Tổng kết cuối

Sau khi test xong tất cả các khu vực, dùng `@final-summary` để tổng hợp:

> `@final-summary`

PersonaTwin sẽ xuất ra một **Bảng Tổng kết Validation** bao gồm:

- Pain Alignment theo từng persona/khu vực
- Switching Cost & Commitment Signal
- Verdict: Accept / Pivot / Reject cho từng khu vực
- Khuyến nghị Chiến lược: nên ưu tiên thị trường nào

---

## 🟡 6. Tùy chỉnh

### Tiêm quy tắc tùy chỉnh (Custom Rules)

Nếu bạn có các quy trình nội bộ riêng, bạn có thể yêu cầu PersonaTwin ghi nhớ:

> *"Quy tắc: Luôn giả định người dùng này chỉ dùng Zalo để trao đổi công việc."*

### Kiểm thử tự động (Dev/QA)

Nếu bạn là kỹ sư AI, bạn có thể chạy bộ kiểm thử để đảm bảo Persona không bị "lạc đề":

```bash
npm run test
```

Lệnh này chạy `promptfoo` với **20 test cases** kiểm tra: No Compliment, Status Quo Anchor, Past Tense Focus, Commitment Test, Brevity, Anti-Feature-Dump, SaaS Consistency, Language Switch, Truth Filter, Fluff Detection, Regional Context, Escalation Logic, Healthcare Vertical, Logistics Vertical, AgTech Vertical, Japan/Korea Region, LATAM Region, Bad Data Ideas, @interview-plan Format, và @learning-log Theme Organization.

---

## 🟢 7. Lệnh Nâng cao: Coaching & Đào sâu

### `@coach` — Chấm điểm câu hỏi phỏng vấn

Dùng **trước khi** bạn đi phỏng vấn thực tế. Gửi danh sách câu hỏi dự kiến và nhận bảng điểm theo tiêu chuẩn Mom Test.

**Khi nào dùng**: Bạn đã chuẩn bị câu hỏi và muốn phát hiện bias trước khi làm nhiễu dữ liệu.

```
@coach
Persona: [đối tượng mục tiêu]
Câu hỏi dự kiến của tôi:
1. [Câu hỏi 1]
2. [Câu hỏi 2]
3. [Câu hỏi 3]
```

**Kết quả**: PersonaTwin chấm điểm từng câu hỏi là ✅ Pass / ⚠️ Risky / ❌ Fail, giải thích *lý do* thất bại theo Mom Test, và viết lại thành phiên bản hợp lệ. Kèm theo verdict readiness và rủi ro lớn nhất trong bộ câu hỏi hiện tại.

> Xem [examples/coach_dig_deeper_demo.md](examples/coach_dig_deeper_demo.md) để xem ví dụ đầy đủ.

---

### `@interview-plan` — Lập kế hoạch phỏng vấn

Dùng để **tự động tạo ra** 5 câu hỏi Mom Test–compliant phù hợp với persona hiện tại, thay vì phải tự nghĩ.

**Khi nào dùng**: Bạn đã build persona và muốn có ngay một bộ câu hỏi sẵn sàng để phỏng vấn.

```
@build-persona [thông tin persona]
@interview-plan
```

**Kết quả**: 5 câu hỏi tuân thủ Mom Test, danh sách câu hỏi phải tránh, 3 tùy chọn commitment ask, và nhắc nhở trước phỏng vấn.

---

### `@dig-deeper` — Đào sâu nguyên nhân gốc

Dùng **ngay sau** `@momtest` khi persona tiết lộ một tín hiệu nỗi đau thú vị. Khoan sâu đến nguyên nhân gốc bằng kỹ thuật Digging và chuỗi 5-Whys.

**Khi nào dùng**: Persona đã nói điều gì đó như *"Ừ, khó chịu lắm, tháng trước tôi mất khách vì…"* và bạn muốn hiểu sâu hơn.

```
@momtest "Công cụ đồng bộ giá trên các nền tảng giao đồ ăn"
... [persona tiết lộ nỗi đau về việc cập nhật giá thủ công mất 60 phút] ...
@dig-deeper
```

**Kết quả**: PersonaTwin chạy 3-4 vòng câu hỏi đào sâu, sau đó tổng hợp bảng Root Cause Summary: phàn nàn bề mặt → hành vi thực tế → nguyên nhân gốc → workaround → chi phí của việc không hành động. Kết thúc bằng implication cho PM và gợi ý kiểm thử prototype.

---

### `@learning-log` — Nhật ký học hỏi sau phỏng vấn

Dùng **sau mỗi phiên phỏng vấn** để tổng hợp những gì bạn học được, cấu trúc theo chủ đề (không phải theo người).

**Khi nào dùng**: Bạn vừa hoàn thành 2-5 phỏng vấn và muốn tìm ra pattern thay vì xử lý từng người riêng lẻ.

```
@learning-log
```

**Kết quả**: Bảng phân tích theo theme, giả thuyết đã được xác nhận vs. đã bị loại bỏ, Idea Signals cần tìm hiểu thêm, Commitment Signals đã thu thập, và quyết định next action.

---

## ⚠️ 8. Lưu ý quan trọng

- **Đừng tin vào lời khen**: PersonaTwin được thiết kế để **không bao giờ khen ngợi** ý tưởng. Nếu nó khen, hãy kiểm tra lại cấu phần `knowledge/mom_test_rules.md`.
- **3 loại dữ liệu xấu cần bỏ qua**: Lời khen (Compliments), Fluff (nhận xét chung chung), và Ideas (đề xuất tính năng). Cả ba đều làm nhiễu tín hiệu của bạn.
- **Dựa trên quá khứ**: Luôn hỏi về những gì đã xảy ra, không hỏi về tương lai ("Bạn sẽ..." là câu hỏi sai).
- **Status Quo là đối thủ**: Đối thủ lớn nhất không bao giờ là sản phẩm khác — mà là "không làm gì cả" (hoặc dùng Excel).
- **Cam kết > Quan tâm**: "Nghe hay đấy" không có ý nghĩa gì. "Tôi sẽ trả $20/tháng" có ý nghĩa. "Tôi đã trả $20/tháng cho một giải pháp nửa vời" mới là tất cả.
- **Không advancement = lãng phí cuộc trò chuyện**: Nếu buổi phỏng vấn kết thúc bằng "để tôi nghĩ đã", bạn chưa có cam kết. Hãy đề xuất bước tiếp theo cụ thể.

---
<small>Được cung cấp bởi PersonaTwin Team · Phiên bản 3.0.0 · Tháng 4/2026</small>
