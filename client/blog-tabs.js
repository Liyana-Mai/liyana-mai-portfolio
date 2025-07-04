document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab]");
  const posts = document.querySelectorAll("#blog-posts article");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTab = button.getAttribute("data-tab");

      // Update tab button styling
      buttons.forEach((btn) => {
        btn.setAttribute("aria-selected", "false");
        btn.classList.remove("border-b-4", "text-indigo-600");
      });
      button.setAttribute("aria-selected", "true");
      button.classList.add("border-b-4", "text-indigo-600");

      // Animate and toggle blog posts
      posts.forEach((post) => {
        const category = post.getAttribute("data-category");
        if (category === selectedTab) {
          post.classList.remove("hidden");
          setTimeout(() => {
            post.classList.add("opacity-100", "scale-100");
            post.classList.remove("opacity-0", "scale-95");
          }, 10);
        } else {
          post.classList.remove("opacity-100", "scale-100");
          post.classList.add("opacity-0", "scale-95");
          setTimeout(() => {
            post.classList.add("hidden");
          }, 300);
        }
      });

      // Refresh AOS in case any animations need to be re-initialized
      AOS.refresh();
    });
  });
});
