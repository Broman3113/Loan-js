export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
       try {
           const elem = document.createElement('a');

           elem.setAttribute('href', path);
           elem.setAttribute('download', 'pick');

           elem.style.display = 'none';
           document.body.appendChild(elem);

           elem.click();

           document.body.removeChild(elem);
       } catch (e) {}
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}
