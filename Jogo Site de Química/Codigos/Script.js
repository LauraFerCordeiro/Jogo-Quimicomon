function Ações(personagem){
    var Açao = ""
    const Elemento = document.getElementById(personagem).classList[1];
    if (Elemento.split("-")[0] == "Acido"){
        if (Elemento.split("-")[0] == "H"){
            Açao = "AtacarH"
        }
        else{
            Açao = "Atacar"
        }
    }

    else if(Elemento == "Base"){
        Açao = "Curar"
    }

    else if(Elemento == "Oxido"){
        Açao = "Defender"  
    }
    
    else if(Elemento == "Sal"){
        Açao = "ContraAtacar"      
                       
    }
    return Açao
}  

function Rodada(AçaoI, AçaoU){
    Verifica_Vida()
    if (AçaoI == "Atacar" || AçaoI == "AtacarH"){
        if(AçaoU == "Esquivar"){
            const sorte = Math.floor(Math.random() * 100)
            if (sorte<=50){
                Esquivar("user")
            }
            else{
                if (AçaoI == "AtacarH"){
                    var VidaU = document.getElementById("life-U");
                    VidaU.style.width = `${parseInt(VidaU.style.width) - 15/2}%`;
                    VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 15}`;
                    VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 15}/200`
                }

                else{
                    var VidaU = document.getElementById("life-U");
                    VidaU.style.width = `${parseInt(VidaU.style.width) - 10/2}%`;
                    VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 10}`;
                    VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 10}/200`
                }

                Dano("user")
            }
        }

        else if(AçaoU == "ContraAtacar"){
            const sorte = Math.floor(Math.random() * 100)
            if (sorte<=60){
                var VidaI = document.getElementById("life-I");
                VidaI.style.width = `${parseInt(VidaI.style.width) - 15/2}%`;
                VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 15}`;
                VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 15}/200`
                Dano("inimigo")
            }
            else{
                if (AçaoI == "AtacarH"){
                    var VidaU = document.getElementById("life-U");
                    VidaU.style.width = `${parseInt(VidaU.style.width) - 15/2}%`;
                    VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 15}`;
                    VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 15}/200`
                }

                else{
                    var VidaU = document.getElementById("life-U");
                    VidaU.style.width = `${parseInt(VidaU.style.width) - 10/2}%`;
                    VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 10}`;
                    VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 10}/200`
                }
                Dano("user")
                
            }
        }

        else if(AçaoU == "Defender"){
            Defender("user")
        }

        else if(AçaoU == "Curar"){
            if (AçaoI == "AtacarH"){
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 15/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 15}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 15}/200`
            }

            else{
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 10}/200`
            }

            Dano("user")
     
            if (parseInt(VidaU.style.width)*2+10>200){
                VidaU.style.width = '100%'
                VidaU.ariaValueNow = '200'
                VidaU.innerHTML = '200/200'
            }
            else{
                VidaU.style.width = `${parseInt(VidaU.style.width) + 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) + 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) + 10}/200`
            }
            Curar("user")

        }

        else if(AçaoU == "Atacar" || AçaoU == "AtacarH"){
            if (AçaoI == "AtacarH"){
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 15/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 15}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 15}/200`
            }

            else{
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 10}/200`
            }

            Dano("user")
            setTimeout(function(){
                if (AçaoU == "AtacarH"){
                    var VidaI = document.getElementById("life-I");
                    VidaI.style.width = `${parseInt(VidaI.style.width) - 15/2}%`;
                    VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 15}`;
                    VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 15}/200`
                }

                else{
                    var VidaI = document.getElementById("life-I");
                    VidaI.style.width = `${parseInt(VidaI.style.width) - 10/2}%`;
                    VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 10}`;
                    VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 10}/200`
                }
                Dano("inimigo")

            }, 650)
            
        }

        else{
            if (AçaoI == "AtacarH"){
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 15/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 15}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 15}/200`
            }

            else{
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 10}/200`
            }

            Dano("user")
        }
    } 

    else if (AçaoI == "ContraAtacar"){
        if(AçaoU == "Atacar" || AçaoU == "AtacarH"){
            const sorte = Math.floor(Math.random() * 100)
            if (sorte<=60){
         
                var VidaU = document.getElementById("life-U");
                VidaU.style.width = `${parseInt(VidaU.style.width) - 15/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 15}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 15}/200`
            }
            else{

                if (AçaoU == "AtacarH"){
                    var VidaI = document.getElementById("life-I");
                    VidaI.style.width = `${parseInt(VidaI.style.width) - 15/2}%`;
                    VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 15}`;
                    VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 15}/200`
                }
    
                else{
                    var VidaI = document.getElementById("life-I");
                    VidaI.style.width = `${parseInt(VidaI.style.width) - 10/2}%`;
                    VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 10}`;
                    VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 10}/200`
                }
            }
        }

        else if (AçaoU == "Curar"){
            var VidaU = document.getElementById("life-U");
            if (parseInt(VidaU.style.width)*2+10>200){
                VidaU.style.width = '100%'
                VidaU.ariaValueNow = '200'
                VidaU.innerHTML = '200/200'
            }
            else{
                VidaU.style.width = `${parseInt(VidaU.style.width) + 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) + 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) + 10}/200`
            }
            Curar("user")
        }
    }

    else if(AçaoI == "Esquivar"){
        if(AçaoU == "Atacar" || AçaoU == "AtacarH"){
            const sorte = Math.floor(Math.random() * 100)
            if (sorte<=50){
                Esquivar("inimigo")
            }
            else{
                if (AçaoU == "AtacarH"){
                    var VidaI = document.getElementById("life-I");
                    VidaI.style.width = `${parseInt(VidaI.style.width) - 15/2}%`;
                    VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 15}`;
                    VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 15}/200`
                }
    
                else{
                    var VidaI = document.getElementById("life-I");
                    VidaI.style.width = `${parseInt(VidaI.style.width) - 10/2}%`;
                    VidaI.ariaValueNow = `${parseInt(VidaI.ariaValueNow) - 10}`;
                    VidaI.innerHTML = `${parseInt(VidaI.innerHTML.split("/")[0]) - 10}/200`
                }
                Dano("inimigo")
            }
        }

        else if (AçaoU == "Curar"){
            var VidaU = document.getElementById("life-U");
            if (parseInt(VidaU.style.width)*2+10>200){
                VidaU.style.width = '100%'
                VidaU.ariaValueNow = '200'
                VidaU.innerHTML = '200/200'
            }
            else{
                VidaU.style.width = `${parseInt(VidaU.style.width) + 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) + 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) + 10}/200`
            }
            Curar("user")
        }

    }

    else if(AçaoI == "Defender"){
        if(AçaoU == "Atacar" || AçaoU == "AtacarH"){
            Defender("inimigo")
        }
        else if (AçaoU == "Curar"){
            var VidaU = document.getElementById("life-U");
            if (parseInt(VidaU.style.width)*2+10>200){
                VidaU.style.width = '100%'
                VidaU.ariaValueNow = '200'
                VidaU.innerHTML = '200/200'
            }
            else{
                VidaU.style.width = `${parseInt(VidaU.style.width) + 10/2}%`;
                VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) + 10}`;
                VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) + 10}/200`
            }
            Curar("user")
        }

        else{
            console.log(AçaoU)
        }
    }

    Verifica_Vida()
    VoltarR()
    NumRodadas++
    console.log(`Rodada ${NumRodadas}`)
}

function RodadaInimigo(){
    var Açao = ''
    const sorte = Math.floor(Math.random() * 100)
    if (sorte<=33){
        Açao = "Esquivar"
    
    }

    else if (sorte<=100){
        Açao = Ações("inimigo")
    }

    return Açao
}

function Trocar(){
    var Reserva = document.getElementById("ReservaTrocar")
    Reserva.appendChild(document.getElementById("R1"))
    Reserva.appendChild(document.getElementById("R2"))
    Reserva.appendChild(document.getElementById("R3"))
    document.getElementById("Submit").addEventListener("click", () => {
        var nome = document.getElementById("nomenclatura").value.toUpperCase().trim()
        var Atual = document.getElementById("info-user")
        if (nome == "HIDRÓXIDO DE AMÔNIO" || nome == "HIDROXIDO DE AMÔNIO" || nome == "HIDRÓXIDO DE AMONIO" || nome == "HIDROXIDO DE AMONIO"){
            var Novo = document.getElementsByName("HidroxidoDeAmonio")[0]
            var classe = "Base"
            var per = 'url("sprites/NH4OH.png")'
            var Continuar = true
        }else if (nome == "ÓXIDO DE ZINCO" || nome == "OXIDO DE ZINCO"){
            var Novo = document.getElementsByName("OxidoDeZinco")[0]
            var classe = "Oxido"
            var per = 'url("sprites/ZnO.png")'
            var Continuar = true
        }else if(nome == "NITRATO DE SÓDIO" || nome == "NITRATO DE SODIO"){
            var Novo = document.getElementsByName("NitratoDeSodio")[0]
            var classe = "Sal"
            var per = 'url("sprites/NaNO3.png")'
            var Continuar = true
        }else if(nome == "ÁCIDO CRÔMICO" || nome == "ÁCIDO CROMICO" || nome == "ACIDO CRÔMICO" || nome == "ACIDO CROMICO"){
            var Novo = document.getElementsByName("AcidoCromico")[0]
            var classe = "Acido"
            var per = 'url("sprites/Al2O3.png")'
            var Continuar = true
        }

        document.getElementById("nomenclatura").value = ""
        VoltarR()

        if (Continuar == true){
            var NomeAtual = Atual.getAttribute('name')
            var NomeNovo = Novo.getAttribute('name')
            Atual.setAttribute('name', NomeNovo)
            Novo.setAttribute('name', NomeAtual)
            var CAtual = Atual.innerHTML
            var CNovo = Novo.innerHTML
            Atual.innerHTML = CNovo
            Novo.innerHTML = CAtual
            document.getElementById("user").className = `personagem ${classe}`
            document.getElementById("user").style.backgroundImage = per
            console.log("Trocou")
        }else if(Continuar == false){
            var VidaU = document.getElementById("life-U");
            VidaU.style.width = `${parseInt(VidaU.style.width) - 5/2}%`;
            VidaU.ariaValueNow = `${parseInt(VidaU.ariaValueNow) - 5}`;
            VidaU.innerHTML = `${parseInt(VidaU.innerHTML.split("/")[0]) - 5}/200`
            var Continuar = false
        }
    })
   
}

function VoltarR(){
    var Voltar = document.getElementById("Reserva")
    Voltar.appendChild(document.getElementById("R1"))
    Voltar.appendChild(document.getElementById("R2"))
    Voltar.appendChild(document.getElementById("R3"))
}

function stopDefAction(evt) {
    evt.preventDefault();
}

function Dano(vit){
    if (vit == "user"){
        var pervit = document.getElementById("user")
        var peratq = document.getElementById("inimigo")
        peratq.style.left = "15vw"
        pervit.style.backgroundImage = `${pervit.style.backgroundImage.split(".")[0]}dmg.png")`
        setTimeout(function(){
            peratq.style.left = "10vw"
            pervit.style.backgroundImage = `${pervit.style.backgroundImage.split("dmg")[0]}.png")`
        }, 500)
    }

    else{
        var pervit2 = document.getElementById("inimigo")
        var peratq2 = document.getElementById("user")
        peratq2.style.left = "65vw"
        pervit2.style.backgroundImage = `${pervit2.style.backgroundImage.split(".")[0]}dmg.png")`
        setTimeout(function(){
            peratq2.style.left = "70vw"
            pervit2.style.backgroundImage = `${pervit2.style.backgroundImage.split("dmg")[0]}.png")`
        }, 500)
    }
}

function Esquivar(vit){
    if (vit == "user"){
        var pervit = document.getElementById("user")
        var peratq = document.getElementById("inimigo")
        pervit.style.top = "35vh"
        peratq.style.left = "15vw"
        setTimeout(function(){
            peratq.style.left = "10vw"
            pervit.style.top = "45vh"
        }, 500)
    }

    else{
        var pervit2 = document.getElementById("inimigo")
        var peratq2 = document.getElementById("user")
        peratq2.style.left = "65vw"
        pervit2.style.top = "30vh"
        setTimeout(function(){
            pervit2.style.top = "20vh"
            peratq2.style.left = "70vw"
        }, 500)
    } 
}

function Defender(vit){
    if (vit == "user"){
        var pervit = document.getElementById("user")
        var peratq = document.getElementById("inimigo")
        pervit.style.filter = "saturate(500%) brightness(1.1)"
        peratq.style.left = "15vw"
        setTimeout(function(){
            peratq.style.left = "10vw"
            pervit.style.filter = "none"
        }, 500)
    }

    else{
        var pervit2 = document.getElementById("inimigo")
        var peratq2 = document.getElementById("user")
        pervit2.style.filter = "saturate(500%) brightness(1.1)"
        peratq2.style.left = "65vw"
        setTimeout(function(){
            pervit2.style.filter = "none"
            peratq2.style.left = "70vw"
        }, 500)
    } 
}

function Curar(vit){
    if (vit == "user"){
        var pervit = document.getElementById("user")
        pervit.style.filter = "invert(50%)"
        setTimeout(function(){  
            pervit.style.filter = "none"
        }, 400)
    }

    else{
        var pervit2 = document.getElementById("inimigo")
        pervit2.style.filter = "invert(50%)"  
        setTimeout(function(){ 
            pervit2.style.filter = "none"
        }, 400)
    } 
}

function Verifica_Vida(){
    var VidaU = parseInt(document.getElementById("life-U").innerText.split("/")[0])
    var VidaI = parseInt(document.getElementById("life-I").innerText.split("/")[0])
    var continuar = false
    if (VidaU <= 0){
        var PopUp = document.getElementById("Derrota")
        continuar = true
    }
    else if (VidaI <= 0){
        var PopUp = document.getElementById("Vitoria")
        continuar = TrocarInimigo()
    }
    if (continuar == true){
        PopUp.className = `${PopUp.className} show`
        PopUp.style.display = "block"
    }
}

function TrocarInimigo(){
    if (IniDerrotados == 0){
        IniDerrotados++
        document.getElementById("Nome-inimigo").innerHTML = "HI <span class='tipo'>Acido</span>"
        var Vida = document.getElementById("life-I")
        Vida.ariaValueNow = "200"
        Vida.innerHTML = "200/200"
        Vida.style.width = "100%"
        var Arena = document.getElementById("inimigo")
        Arena.className = "personagem Acido-H"
        Arena.style.backgroundImage = "url('sprites/HI.png')"
        document.getElementById("placar").innerHTML = "2/3"
        return false
    }
    else if (IniDerrotados == 1){
        IniDerrotados++
        document.getElementById("Nome-inimigo").innerHTML = "CaCO<sub>3</sub> <span class='tipo'>Sal</span>"
        var Vida = document.getElementById("life-I")
        Vida.ariaValueNow = "200"
        Vida.innerHTML = "200/200"
        Vida.style.width = "100%"
        var Arena = document.getElementById("inimigo")
        Arena.className = "personagem Sal"
        Arena.style.backgroundImage = "url('sprites/CaCO3.png')"
        document.getElementById("placar").innerHTML = "3/3"
        return false
    }
    else{
        return true
    }
}

document.getElementById('nomenclatura').addEventListener('click', stopDefAction, false);

document.getElementById('Submit').addEventListener('click', stopDefAction, false);

IniDerrotados = 0

NumRodadas = 0 