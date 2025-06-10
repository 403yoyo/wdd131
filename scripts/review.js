function updateReviewCounter() {
    const hasQueryParams = window.location.search.length > 0;
    let count = parseInt(localStorage.getItem('reviewCount')) || 0;

    if (hasQueryParams) {
        count += 1;
        localStorage.setItem('reviewCount', count);
    }

    const reviewCountSpan = document.getElementById('reviewCount');

    if (reviewCountSpan) {
        reviewCountSpan.textContent = count;
    }
}

document.addEventListener('DOMContentLoaded', updateReviewCounter);