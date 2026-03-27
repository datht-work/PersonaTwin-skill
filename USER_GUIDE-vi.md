# PersonaTwin: Hướng dẫn Sử dụng (User Guide)

Tài liệu này cung cấp hướng dẫn chi tiết cách sử dụng kỹ năng **PersonaTwin** để giả lập người dùng và kiểm chứng ý tưởng sản phẩm theo nguyên tắc "The Mom Test".

---

## ⚡ Bảng lệnh nhanh (Cheat Sheet)

| Lệnh | Hành động / Hành vi |
|---|---|
| `/build-persona [thông tin]` | **Xây dựng Persona**: Tạo một người dùng ảo chi tiết dựa trên khung 5P Framework. |
| `/momtest [ý tưởng/tính năng]` | **Kiểm thử Mom Test**: Đưa ý tưởng ra trước Persona để nhận phản hồi "phũ phàng" và trung thực. |
| `/summarize [nội dung]` | **Lọc sự thật (Truth Filter)**: Trích xuất các nỗi đau (Pains) và hành vi thực tế từ bản ghi phỏng vấn. |
| `/safeai lang [Ngôn ngữ]` | **Đa ngôn ngữ**: Chuyển đổi ngôn ngữ phản hồi (mặc định tự nhận diện). |

---

## 🟢 1. Quy trình làm việc (Workflow)

### Bước 1: Thu thập dữ liệu & Lọc sự thật
Sử dụng lệnh `/summarize` khi bạn có bản ghi phỏng vấn thô. PersonaTwin sẽ loại bỏ những lời khen sáo rỗng và chỉ giữ lại những gì người dùng **đang làm** hoặc **đã làm**.
> `/summarize "Người dùng nói: Sản phẩm của bạn rất hay, tôi sẽ mua nếu có thêm tính năng X. Hiện tại tôi đang dùng Excel để quản lý."`
> **Kết quả**: PersonaTwin sẽ chỉ ra rằng ý tưởng "tính năng X" chỉ là giả thuyết, hành vi thực tế là "đang dùng Excel".

### Bước 2: Xây dựng Persona (5P Framework)
Sử dụng lệnh `/build-persona` để tạo một đối tượng giả lập. Bạn nên cung cấp thông tin nhân khẩu học cơ bản.
> `/build-persona Chủ cửa hàng tạp hóa tại Việt Nam, 45 tuổi, ít rành công nghệ.`

### Bước 3: Giả lập phản hồi (Mom Test Simulation)
Sử dụng lệnh `/momtest` để kiểm tra ý tưởng của bạn.
> `/momtest "Tôi muốn làm một ứng dụng tích điểm 5 bước cho cửa hàng của bạn."`
> **PersonaTwin**: "Tôi không có thời gian cho 5 bước. Tôi còn bận trông tiệm. Hiện tại tôi chỉ nhớ mặt khách rồi bớt cho họ 2-3 nghìn cho nhanh."

---

## 🟡 2. Tùy chỉnh nâng cao

### Tiêm quy tắc tùy chỉnh (Custom Rules)
Nếu bạn có các quy trình nội bộ riêng, bạn có thể yêu cầu PersonaTwin ghi nhớ:
> *"Quy tắc: Luôn giả định người dùng này chỉ dùng Zalo để trao đổi công việc."*

### Kiểm thử tự động (Dev/QA)
Nếu bạn là kỹ sư AI, bạn có thể chạy bộ kiểm thử để đảm bảo Persona không bị "lạc đề":
```bash
npm run test
```
Lệnh này sẽ chạy `promptfoo` để kiểm tra xem Persona có vô tình "khen" ý tưởng của PM hay không.

---

## 🔴 3. Lưu ý quan trọng
- **Đừng tin vào lời khen**: PersonaTwin được thiết kế để **không bao giờ khen ngợi** ý tưởng. Nếu nó khen, hãy kiểm tra lại cấu phần `knowledge/mom_test_rules.md`.
- **Dựa trên quá khứ**: Luôn hỏi về những gì đã xảy ra, không hỏi về tương lai ("Bạn sẽ..." là câu hỏi sai).

---
<small>Được cung cấp bởi PersonaTwin Team · Phiên bản 1.3.0 · Tháng 3/2026</small>
