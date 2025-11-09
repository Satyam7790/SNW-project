# SNW-project
Recipe Hub: A Modern Cookbook Website

Welcome to Recipe Hub, a multi-page, visually appealing website built to showcase recipes from around the world. This project is built from scratch using pure HTML, CSS, and vanilla JavaScript, with a focus on modern design and responsive layout.

🌟 Key Features

Dynamic Homepage: A stunning homepage featuring a background video hero, featured recipes, and easy navigation.

Welcome Popup: A JavaScript-powered modal greets users on their first visit and blurs the main content for focus.

Detailed Cuisine Pages: Four distinct, beautifully styled pages for:

Italian Cuisine

Japanese Cuisine

Mexican Cuisine

Indian Cuisine

In-Depth Recipe Cards: Each cuisine page features multiple detailed recipes, complete with image placeholders, ingredient lists, and step-by-step instructions.

Fully Responsive Design: The entire site adapts flawlessly to all screen sizes, from mobile phones to tablets and desktops, using CSS Media Queries.

Modern CSS Styling: Features a clean dark theme, CSS variables, a sticky navigation bar, and a beautiful food-themed background on all recipe pages.

🛠️ Project Structure & Tech Stack

This project uses a clean and easy-to-understand file structure.

/Recipe-Hub-Project
|
|-- 📄 index.html       (The main homepage)
|-- 📄 italian.html     (Italian recipe page)
|-- 📄 japanese.html    (Japanese recipe page)
|-- 📄 mexican.html     (Mexican recipe page)
|-- 📄 indian.html      (Indian recipe page)
|
|-- 🎨 style.css        (The single stylesheet for the entire site)
|-- ⚙️ script.js        (Handles the welcome popup logic)
|
|-- 📹 (Your Video)     (e.g., 'WhatsApp Video 2025-11-09 at 14.20.46.mp4')
|-- 🖼️ (Your Images)    (e.g., 'anime-character.png', 'italian-food.jpg', etc.)
|
|-- 📄 README.md        (You are here!)


Technologies Used

HTML5: For all the content and page structure.

CSS3: For all styling, layout, and responsiveness.

CSS Variables: For a consistent color theme.

Media Queries: For mobile-first responsive design.

Flexbox & Grid: For modern and robust layouts.

JavaScript (ES6+): For the interactive welcome popup and background blur effect.

🚀 How to Use

To run this project, no special tools are needed!

Clone or Download:

Download the ZIP file and unzip it, OR

Clone the repository: git clone https://github.com/Satyam7790/SNW-project.git

Add Your Assets:

Place your background video (e.g., WhatsApp Video...mp4) in the main folder.

Find and add your images for the popup, cuisine cards, and recipes. Make sure to update the src="..." paths in the HTML files to match your image filenames.

Open in Browser:

Simply double-click the index.html file to open it in your favorite web browser (like Chrome, Firefox, or Edge).

🎨 Customization

This project is designed to be easily customized:

Change Colors: All main colors (red, black, white) are stored as CSS variables at the top of style.css. You can change them in one place!

Add More Recipes: On any cuisine page (e.g., italian.html), just copy and paste an entire <div class="recipe-detail-card">...</div> block and update the text and images.

Add More Cuisines:

Create a new file, e.g., french.html.

Copy the content from an existing cuisine page (like italian.html) as a template.

Update the header, description, and recipe cards.

Add a link to your new french.html page in the <header> (navigation bar) section in all your HTML files.