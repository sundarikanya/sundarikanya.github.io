Here's a beautiful and professional GitHub README.md template for your video project, tailored to your current work with FastAPI, video data management, and frontend integration:

---

# 🎥 Sundari Kanya Video Gallery

An elegant, lightweight video gallery powered by **FastAPI (Backend)** and **Bootstrap + JavaScript (Frontend)**. Easily manage video data via API, dynamically render video pages, and deliver a smooth streaming experience with direct Dropbox links.

---

## ✨ Features

* ✅ FastAPI-based REST API for managing video content
* ✅ Auto-generated IDs for videos
* ✅ Responsive Bootstrap 5 frontend
* ✅ Dynamic video detail pages via query parameters (`?id=001`)
* ✅ Dropbox video streaming with raw links
* ✅ Fully customizable JSON data storage
* ✅ Suggested videos feature on each video page

---

## 🛠️ Tech Stack

| Backend    | Frontend           | Storage          |
| ---------- | ------------------ | ---------------- |
| FastAPI 🚀 | HTML + Bootstrap 5 | JSON file        |
| Python 3.x | Vanilla JavaScript | Local filesystem |

---

## 🚀 How to Run Locally

### Backend (FastAPI)

```bash
git clone https://github.com/your-username/sundarikanya.git
cd sundarikanya/backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8089
```

> Your API will run at: [http://127.0.0.1:8089/](http://127.0.0.1:8089/)

### Frontend (HTML Pages)

* Open `index.html` to browse all videos.
* Open `video.html?id=001` to view individual video detail pages.

---

## 📂 API Endpoints

| Endpoint                       | Method | Description     |
| ------------------------------ | ------ | --------------- |
| `/api/get/sundarikanya`        | GET    | List all videos |
| `/api/get/sundarikanya?id=001` | GET    | Get video by ID |
| `/api/add/sundarikanya`        | POST   | Add new videos  |

---

## 📌 JSON Data Format

```json
{
  "uploader": "Sundari Kanya",
  "videos": [
    {
      "title": "Elegant Bridal Saree Look",
      "description": "Full bridal shoot with traditional gold accessories.",
      "thumbnail": "https://via.placeholder.com/300x200.png?text=Thumb",
      "videourl": "https://www.dropbox.com/scl/fi/.../video.mp4?raw=1"
    }
  ]
}
```

---

## 💡 Screenshots

| Home Page                                    | Video Page                                    |
| -------------------------------------------- | --------------------------------------------- |
| ![Home](https://github.com/sundarikanya/sundarikanya.github.io/blob/main/Screenshot%20(1303).png) | ![Video](https://github.com/sundarikanya/sundarikanya.github.io/blob/main/Screenshot%20(1304).png) |

---

## ❤️ Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

MIT License

---

### 👑 Developed by [Sanjay Kumar Yadav]([https://github.com/your-username](https://sanjayengineer121.github.io/))

---

If you'd like, I can generate a ready-to-download `README.md` file. Would you like that?
