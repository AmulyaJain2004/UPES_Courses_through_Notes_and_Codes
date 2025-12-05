# Quick Start Guide

## 🚀 Your Application is Running!

Both servers have been started successfully:

### Backend (Django)

- **URL**: http://127.0.0.1:8000/
- **API Endpoint**: http://127.0.0.1:8000/api/github-contents/
- **Status**: ✅ Running

### Frontend (React)

- **URL**: http://localhost:5173/
- **Status**: ✅ Running

## 📋 What's Working

1. ✅ Django REST API is serving GitHub repository data
2. ✅ React frontend is ready to display course materials
3. ✅ Responsive design implemented
4. ✅ Search functionality integrated
5. ✅ All sections ready: Years, Resources, ML/DL Training

## 🌐 Access Your Website

Open your browser and navigate to:
**http://localhost:5173/**

You should see:

- UPES Courses header with search bar
- Academic Years section (expandable cards)
- Important Resources grid
- ML/DL Intensive Training materials

## 🔧 Managing the Servers

### Stop Servers

Press `Ctrl+C` in each terminal window to stop the servers

### Restart Backend

```bash
cd server
C:/Users/hp/OneDrive/Desktop/UPES-website/venv/Scripts/python.exe manage.py runserver
```

### Restart Frontend

```bash
cd client
npm run dev
```

## 📝 Next Steps

1. **Test the Website**: Open http://localhost:5173/ in your browser
2. **Try the Search**: Use the search bar to filter courses
3. **Expand Years**: Click on any year to see semesters and courses
4. **Explore Resources**: Browse Important Resources and ML/DL Training

## 🛠️ Customization

### Change API Base URL

Edit `client/src/App.jsx` and update:

```javascript
const API_BASE_URL = "http://localhost:8000/api";
```

### Modify Styling

Edit `client/src/App.css` to customize colors, fonts, and layout

### Add GitHub Token (Optional)

For higher API rate limits:

1. Generate a GitHub personal access token
2. Add to `server/.env`:
   ```
   GITHUB_TOKEN=your_token_here
   ```
3. Restart Django server

## 🐛 Troubleshooting

### Port Already in Use

- Django: Change port with `python manage.py runserver 8001`
- React: Vite will automatically suggest an alternative port

### CORS Issues

CORS is already configured in Django settings to allow `http://localhost:5173`

### API Not Responding

1. Check Django server is running
2. Verify URL: http://127.0.0.1:8000/api/github-contents/
3. Check browser console for errors

## 📚 Documentation

See `README.md` for complete setup instructions and features.

## 🎉 Success!

Your UPES Courses website is now live and ready to use!
