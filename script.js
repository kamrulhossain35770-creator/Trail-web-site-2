document.addEventListener('DOMContentLoaded', function() {
    // HTML ফাইল থেকে ফর্মটি নির্বাচন করা হচ্ছে
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // ফর্ম সাবমিট করার সময় কী ঘটবে তা নির্ধারণ করা
    loginForm.addEventListener('submit', function(event) {
        // ইনপুট ফিল্ডগুলো খালি আছে কিনা তা পরীক্ষা করা
        if (usernameInput.value === '' || passwordInput.value === '') {
            // যদি কোনো একটি খালি থাকে, তাহলে ফর্ম সাবমিশন বন্ধ করে দেওয়া
            event.preventDefault();
            alert('দয়া করে ব্যবহারকারীর নাম এবং পাসওয়ার্ড উভয়ই পূরণ করুন।');
        }
    });
});
