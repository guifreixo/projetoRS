function toggleMode() {
  // substituição do fundo
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a tag da imagem
  const img = document.querySelector("#profile img")
  
  //substituir a imagem
  if (html.classList.contains('light')) {
    //se tiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    //se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute("src", "./assets/avatar2.png")
  }
  






  
  
}