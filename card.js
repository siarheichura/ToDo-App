export function Card(title, description) {
    this.title = title
    this.description = description

    this.getHtml = function() {
        return `<div class="card text-dark bg-light m-3 position-relative mx-auto" style="width: 18rem;">
                    <div class="card-header fw-bold fs-5">${this.title}</div>
                    <div class="card-body">
                        <p class="card-text">${this.description}</p>
                    </div>
                </div>`
    }
}