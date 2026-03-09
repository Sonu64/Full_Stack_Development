// String creation and Template Literals
let firstName = "Sonu"; // Double quotes
let lastName = "Java"; // Single quotes
let date = "18th Oct";

// Modern Way: Template Literals (Backticks) [00:01:28]
// Benefits: Multi-line strings and String Interpolation
let message = `Hello, ${firstName} ${lastName}!
The course starts on ${date}.`;

console.log(message);

// Common String Methods
let text = "   JavaScript Revision   ";

// Trimming whitespace
console.log(text.trim()); // "JavaScript Revision"

// Case conversion
console.log(text.toUpperCase()); // "   JAVASCRIPT REVISION   "
console.log(text.toLowerCase()); // "   javascript revision   "

// Substrings and Slicing
let phrase = "Coder Army";
console.log(phrase.slice(0, 5)); // "Coder" (extracts from index 0 to 4)
console.log(phrase.substring(6)); // "Army"

// Replacement
let updated = phrase.replace("Army", "Devs"); 
console.log(updated); // "Coder Devs"

// The Date Object
// Current Date and Time
let now = new Date();
console.log(now.toString());

// Specific Date (Year, Month - 0 indexed, Day, Hour, Min, Sec)
// Note: January is 0, October is 9
let releaseDate = new Date(2025, 9, 18, 10, 30, 16);
// YYYY MM DD HH MM SS
console.log(releaseDate.toLocaleString());

// Getting Specific Components
console.log(now.getFullYear()); // e.g., 2026
console.log(now.getMonth());    // e.g., 2 (for March)
console.log(now.getDay());      // Day of the week (0-6)

// 4. Timestamps & Timezones (Backend Integration)
// Get current timestamp in milliseconds
let timestamp = Date.now();
console.log(timestamp);

// Handling UTC [01:04:15]
// Good Practice: Always store/transfer dates in UTC format from backend to frontend. Then convert to local time on the frontend as needed.
console.log(now.toUTCString()); // UTC format
console.log(now.toLocaleString()); // Local time format (automatically adjusts to user's timezone)