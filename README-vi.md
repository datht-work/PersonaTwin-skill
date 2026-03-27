# PersonaTwin: The Mom Test Simulation Skill 🤖 (Tiếng Việt)

> 🌍 [English](README.md) | 🇻🇳 [Tiếng Việt](README-vi.md)
> 📖 [Actionable User Guide](USER_GUIDE.md) | 🇻🇳 [Hướng dẫn Sử dụng](USER_GUIDE-vi.md)

**Kỹ năng AI chuyên dụng đóng vai trò như một đám mây giả lập người dùng (synthetic user testing cloud). PersonaTwin áp dụng các nguyên tắc "The Mom Test" để tạo ra những phản hồi thực tế, "phũ phàng" dành cho các Quản trị sản phẩm (Product Managers).**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)](SKILL.md)

---

## 🎯 Giá trị cốt lõi

Xây dựng sản phẩm mà khách hàng thực sự muốn là một thử thách lớn, bởi vì người dùng thường "nói dối" một cách lịch sự. **PersonaTwin** bảo vệ bạn khỏi những định kiến cá nhân bằng cách đóng vai trò là một "bộ lọc sự thật".

- **🚫 Loại bỏ lời khen**: Tự động lọc ra những câu "Nghe hay đấy!" và chỉ trích xuất những bằng chứng thực tế về hành vi người dùng.
- **⚡ Thử nghiệm nhanh**: Kiểm chứng ý tưởng tính năng với những persona thực tế trước khi viết bất kỳ dòng code nào.
- **🧪 Mom Test đóng gói**: Logic tích hợp tuân thủ nghiêm ngặt các nguyên tắc của Rob Fitzpatrick — tập trung vào hành vi trong quá khứ và những nỗi đau hiện tại.
- **🏗️ Persona có cấu trúc**: Sử dụng khung **5P Framework** (Profile, Psychology, Pains, Proficiency, Principles) để giả lập với độ tin cậy cao.

---

## 🛠️ Tính năng chính

### 1. Công cụ Tri thức Mô-đun (Modular Knowledge Engine)
Sử dụng các thẻ XML (`<rule>`, `<template>`, `<example>`) trong thư mục `knowledge/` và `resources/` để AI truy xuất chính xác và duy trì logic nhất quán.

### 2. Hệ thống câu lệnh (Command System)
Kích hoạt các hành vi cụ thể ngay lập tức:
- `/build-persona`: Tạo persona chất lượng cao từ thông tin nhân khẩu học.
- `/momtest`: Đưa ý tưởng tính năng ra trước persona để nhận phản hồi thực tế.
- `/summarize`: Trích xuất "sự thật phũ phàng" từ các bản ghi phỏng vấn thô.

### 3. Kiểm thử & Chất lượng tự động
Bao gồm bộ kiểm thử `promptfoo` để đảm bảo AI không bao giờ vi phạm quy tắc "Không khen ngợi", và `markdownlint` để kiểm soát chất lượng tài liệu.

---

## 🚀 Bắt đầu nhanh

### Cài đặt (qua CLI)
```bash
npx skills add datht-work/personatwin-skill
```

### Thiết lập thủ công
1. Sao chép nội dung **[SKILL.md](SKILL.md)** vào phần hướng dẫn (system prompt) của trợ lý AI.
2. Cung cấp các thư mục **`knowledge/`**, **`resources/`**, và **`examples/`** như các tệp tri thức/ngữ cảnh.

---

## 📋 Lịch sử phiên bản

| Phiên bản | Ngày | Điểm nổi bật |
| --- | --- | --- |
| **v1.3.0** | 27/03/2026 | **Chuẩn hóa dự án**. Thêm LICENSE, CHANGELOG, CONTRIBUTING. Sửa lỗi version drift. |
| **v1.2.0** | 27/03/2026 | **Chất lượng & Tích hợp**. Full journey demo, bảng Good vs Bad, sửa lỗi lint. |
| **v1.1.0** | 27/03/2026 | **Nâng cấp tiêu chuẩn Skill AI Safe**. Thêm Modular Knowledge Engine, Hệ thống lệnh và hỗ trợ thẻ XML. |
| **v1.0.0** | 26/03/2026 | Phiên bản đầu tiên - Giả lập Mom Test cơ bản. |

---

## 🤝 Đóng góp
Chúng tôi hoan nghênh các đóng góp cho kho tri thức `knowledge/`, đặc biệt là các persona chuyên biệt cho từng ngành công nghiệp và các cải tiến logic "Mom Test".

---

## 📄 Giấy phép
Giấy phép MIT — xem [LICENSE](LICENSE) để biết chi tiết.

> ⚠️ **Lưu ý:** Kỹ năng này cung cấp các giả lập đào tạo và hướng dẫn. Nó không thay đổi được việc bạn cần phải nói chuyện trực tiếp với người dùng thực tế.

*Được xây dựng với ❤️ bởi PersonaTwin Team · v1.3.0 · Tháng 03/2026*
