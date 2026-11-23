document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-download]");

    if (!button) return;

    const fileUrl = button.dataset.download;
    const fileName = button.dataset.filename;

    const link = document.createElement("a");

    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();
});