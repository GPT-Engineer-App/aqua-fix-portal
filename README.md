# aqua-fix-portal

# **AquaFix**

This website is for AquaFix, a business specializing in pool repair and maintenance services.

## **Screens**

### **Home Page**
Serves as the landing page, showcasing AquaFix's services, facilitating service requests, and providing contact information.

- **Behavior:** Intuitively guides users to learn about the services, book appointments, or contact the business.
- **Layout:** Consists of a 'Header', 'Service Overview', 'Testimonials', 'Contact Form', and 'Footer'.

## **Components**

### **Header**
Displays the business logo, navigation links, and a prominent call-to-action (CTA) button for booking services.

- **Behavior:** Stays fixed at the top as users scroll down for constant access. The CTA button, when clicked, leads to the 'Contact Form' anchored on the same page.

### **Service Overview**
Provides detailed descriptions of the various pool repair and maintenance services offered by AquaFix.

- **Behavior:** Each service description expands on click to reveal more details including pricing, duration, and special equipment used.

### **Testimonials**
Showcases customer reviews and before-and-after photos of completed projects.

- **Behavior:** Automatically cycles through testimonials and can be manually controlled by the user.

### **Contact Form**
Enables users to quickly request a repair or maintenance service. Includes fields for name, contact information, type and size of pool, desired service, and a preferred date and time.

- **Behavior:** Validates user input for correct formats and required fields before submission. On submission, displays a confirmation message and sends an email to both the business and the customer.

### **Footer**
Contains additional contact details, social media links, and a brief about the company.

- **Behavior:** Provides essential contact and company information, visible on all pages for easy access.

Follow the following design principles:
- Use a Light Base: Employ a predominantly white or light-colored background to create a clean, expansive feel.
- Accent with Vibrant Colors: Choose one or two vibrant colors for highlights, buttons, and important features to draw attention and guide user interactions
- Utilize black and grey for text for clarity.
- Ensure that the layout feels open and uncluttered by generously using ample whitespace. It's okay if this means users need to scroll more; the additional space will create a more breathable and comfortable user experience. 
- Use images and icons strategically, when it compliments the website
- If necessary, design a simple, top-aligned navigation bar with clear categories, ensuring easy access and usability. Keep footer design minimal with essential links organized into categories for easy navigation.
- Hierarchical Type Setting: Use varied type sizes and weights to establish a clear visual hierarchy, helping users navigate through the content easily.
- Standout CTAs: Design call-to-action buttons with standout colors that contrast with the background, making them easy to locate.
- Emphasize Key Information: Use size, color, and placement to emphasize key pieces of information or actions.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/aqua-fix-portal.git
cd aqua-fix-portal
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
