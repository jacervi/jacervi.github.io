        function mostraralerta() {
            alert('hizo clic!');
        }
        function hacerclic() {
            let lista=document.querySelectorAll('p')
            lista[0].onclick=mostraralerta;
            //document.getElementsByTagName('p')[0].onclick = mostraralerta;
        }
        window.onload = hacerclic;