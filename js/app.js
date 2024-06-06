document.addEventListener('DOMContentLoaded', function() {
    const books = [
        {
            title: "Yan's Mind and Soul",
            description: "A book that describes my spirituality, it tells why I believe in God, and in prophets, and also demonstrates various proofs of their existence. The book also talks about how I see life.",
            author: "Wesley Yan Soares Brehmer",
            pdf: "./books/Yan's Mind and Soul.pdf"
        },
        {
            title: "Book 2",
            description: "A brief description of Book 2.",
            author: "Author 2",
            pdf: "path/to/book2.pdf"
        },
        {
            title: "Book 3",
            description: "A brief description of Book 3.",
            author: "Author 3",
            pdf: "path/to/book3.pdf"
        }
    ];

    const bookList = document.getElementById('book-list');

    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'col-md-4 mb-4';
        bookCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.description}</p>
                    <p class="card-text"><small class="text-muted">By ${book.author}</small></p>
                    <button class="btn btn-read" data-toggle="modal" data-target="#bookModal" data-pdf="${book.pdf}">Read</button>
                </div>
            </div>
        `;
        bookList.appendChild(bookCard);
    });

    $('#bookModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var pdfPath = button.data('pdf');
        var modal = $(this);
        modal.find('.modal-title').text('Read Book');
        modal.find('#bookFrame').attr('src', pdfPath);
    });

    $('#bookModal').on('hidden.bs.modal', function () {
        var modal = $(this);
        modal.find('#bookFrame').attr('src', '');
    });
});
