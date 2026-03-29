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
| `@build-persona [thông tin]` | **Xây dựng Persona**: Tạo một người dùng ảo chi tiết dựa trên khung 5P Framework. |
| `@momtest [ý tưởng/tính năng]` | **Kiểm thử Mom Test**: Đưa ý tưởng ra trước Persona để nhận phản hồi "phũ phàng" và trung thực. |
| `@summarize [nội dung]` | **Lọc sự thật (Truth Filter)**: Trích xuất các nỗi đau (Pains) và hành vi thực tế từ bản ghi phỏng vấn. |
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

PersonaTwin sẽ tạo ra một **Persona Card** có cấu trúc với Profile, Psychology, Pains & Gains, Proficiency và Principles.

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

## 🟡 5. Tùy chỉnh

### Tiêm quy tắc tùy chỉnh (Custom Rules)

Nếu bạn có các quy trình nội bộ riêng, bạn có thể yêu cầu PersonaTwin ghi nhớ:

> *"Quy tắc: Luôn giả định người dùng này chỉ dùng Zalo để trao đổi công việc."*

### Kiểm thử tự động (Dev/QA)

Nếu bạn là kỹ sư AI, bạn có thể chạy bộ kiểm thử để đảm bảo Persona không bị "lạc đề":

```bash
npm run test
```

Lệnh này chạy `promptfoo` với 8 test cases kiểm tra: No Compliment, Status Quo Anchor, Past Tense Focus, Commitment Test, Brevity, Anti-Feature-Dump, SaaS Consistency, và Language Switch.

---

## ⚠️ 6. Lưu ý quan trọng

- **Đừng tin vào lời khen**: PersonaTwin được thiết kế để **không bao giờ khen ngợi** ý tưởng. Nếu nó khen, hãy kiểm tra lại cấu phần `knowledge/mom_test_rules.md`.
- **Dựa trên quá khứ**: Luôn hỏi về những gì đã xảy ra, không hỏi về tương lai ("Bạn sẽ..." là câu hỏi sai).
- **Status Quo là đối thủ**: Đối thủ lớn nhất không bao giờ là sản phẩm khác — mà là "không làm gì cả" (hoặc dùng Excel).
- **Cam kết > Quan tâm**: "Nghe hay đấy" không có ý nghĩa gì. "Tôi sẽ trả $20/tháng" có ý nghĩa. "Tôi đã trả $20/tháng cho một giải pháp nửa vời" mới là tất cả.

---
<small>Được cung cấp bởi PersonaTwin Team · Phiên bản 2.0.0 · Tháng 3/2026</small>
