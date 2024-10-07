document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        let isValid = true;

        const email = form.querySelector('#email').value;
        const telefono = form.querySelector('#telefono').value;

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            isValid = false;
            alert('Por favor, introduce un email válido.');
        }

        if (telefono.length < 9) {
            isValid = false;
            alert('El teléfono debe tener al menos 9 dígitos.');
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            alert('Formulario enviado con éxito!');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            item.classList.add('active');
        });
    });

    window.onload = () => {
        const items = document.querySelectorAll('.product-item');
        items.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };
});
