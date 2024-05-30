document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));

            tab.classList.add('active');

            tabContents.forEach(tc => tc.classList.remove('active'));

            document.getElementById('tab-' + target).classList.add('active');
        });
    });

    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
});
