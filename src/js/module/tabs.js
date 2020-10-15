import IMask from 'imask';

// class Fields {
//     constructor(fields) {
//         for (const field in fields) {
//             this[field] = field;
//         }
//     }
//
// }

const telField = document.getElementById('tel-field');
const fioField = document.getElementById('fio-field');
const addressField = document.getElementById('address-field');
const commentField = document.getElementById('comment-field');
const button = document.getElementById('btn-save__delivery');
const maskOptions = { mask: '+{7}(000)000-00-00' };

IMask(telField, maskOptions);

function doDisableButton() {
    const fields = document.querySelectorAll('#delivery input, #delivery textarea');
    const isValid = [];
    fields.forEach((val) => {
        if (!val.validity.valid) {
            isValid.push(val.validity.valid);
        }
    });
    button.disabled = isValid.length !== 0;
}

fioField.addEventListener('input', (val) => {
    val.target.value = val.target.value.replace(/([^а-яА-ЯA-Za-z \\-])+/i, '');
    doDisableButton();
});

addressField.addEventListener('input', (val) => {
    val.target.value = val.target.value.replace(/([^а-яА-ЯA-Za-z0-9 \\-\\,])+/i, '');
    doDisableButton();
});

commentField.addEventListener('input', (val) => {
    val.target.value = val.target.value.replace(/([^а-яА-ЯA-Za-z0-9 \\-\\,\\.\\?\\!])+/i, '');
    doDisableButton();
});

telField.addEventListener('input', () => {
    doDisableButton();
});
