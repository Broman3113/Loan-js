export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldOfficer.items = this.oldOfficer.querySelectorAll(items);
            this.newOfficer.items = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldOfficer.counter = 0;
            this.newOfficer.counter = 0;
        } catch (e) {}
    }

    bindTriggers() {
        [this.oldOfficer, this.newOfficer].forEach(officer => {
            officer.querySelector('.plus').addEventListener('click', () => {
                if (officer.counter !== officer.items.length - 2) {
                    officer.items[officer.counter].style.display = 'flex';
                    officer.counter++;
                } else {
                    officer.items[officer.counter].style.display = 'flex';
                    officer.items[officer.items.length - 1].remove();
                }
            });
        })
    }

    hideItems() {
        [this.oldOfficer, this.newOfficer].forEach(section => {
            section.querySelectorAll(this.items).forEach((item, i, arr) => {
                if (i !== arr.length - 1) {
                    item.style.display = "none";
                }
            });
        });
    }

    init() {
        try {
            this.hideItems();
            this.bindTriggers();
        } catch (e) {}
    }
}
