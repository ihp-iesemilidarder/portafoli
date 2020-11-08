window.onload=function(){
    // ======================FUNCIONES DE LA PÁGINA PRINCIPAL======================
        //click logo
        document.getElementById("logo").addEventListener("click",function(){
            window.location="/";
        });
        proyectos=document.getElementsByClassName("item");
        proyectos_count=proyectos.length;

        /* En cada iteración, identificamos el elemento en que esta y obtenemos su id, para añadirle un addEventListener click que al hacerle click, nos carge la página.
        Dentro del addEventListener no añadimos 'window.location="/"+identificador' porque si hacemos eso, siempre dará como resultado 'plantillas', ya que fue la última
        iteración que hizo. Lo que tenemos que hacer es coger el objeto actual en que esta y sacarle el id 'this.id'. Podemos hacer this.id, ya que la variable this es un
        un objeto. */
        for(var i=0;i<=proyectos_count-1;i++){
            identificador = proyectos[i].getAttribute("id");
            document.getElementById(identificador).addEventListener("click",function(){
                window.location="./"+this.id;
                //console.log(this);
                //console.log("id: "+this.id);
                //console.log("identificador: "+identificador);
                
            });
        }
        //console.log("ultimo id: "+identificador);

        /*
        document.getElementById("Games_3D").addEventListener("click",function(){
            window.location="/"+this.id;
            //console.log(this);
            //console.log("id: "+this.id);
        }); 
        */
}