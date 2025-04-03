let currentDescription = null;

    function details(id) {
        const description = document.getElementById(id);

        if (currentDescription) {
            currentDescription.classList.add('hide');
        }

        description.classList.remove('hide');
        currentDescription = description;
    }

    function closeDetails() {
        if (currentDescription) {
            currentDescription.classList.add('hide');
            currentDescription = null;
        }
    }

    function backgroundColor() {
        const changeBackgroundColor = document.getElementById('changeBackgroundColor');
        const color = changeBackgroundColor.value;
        const views = document.querySelectorAll('.view');
        views.forEach(view => {
            const fontColor = color === '#000000' ? 'white' : 'black';
            view.style.backgroundColor = color;
            view.style.color = fontColor;
        });
    }

    function fontFamily() {
        const changeFontFamily = document.getElementById('changeFontFamily');
        const font = changeFontFamily.options[changeFontFamily.selectedIndex].value;
        const views = document.querySelectorAll('.view');
        views.forEach(view => {
            view.style.fontFamily = font;
        });    
    }

    function fontSize() {
        const changeFontSize = document.getElementById('changeFontSize');
        const fontSize = changeFontSize.options[changeFontSize.selectedIndex].value;
        const views = document.querySelectorAll('.view');
        views.forEach(view => {
            view.style.fontSize = fontSize;
        });
    }
    document.getElementById("changeBackgroundColor").value = "#ffffff";
    document.getElementById("changeFontFamily").value = "Arial";
    document.getElementById("changeFontSize").value = "medium";