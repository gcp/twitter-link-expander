var linkClassName = "twitter-timeline-link"

function expandCurrentTwitterLinks(){
  var links = document.getElementsByClassName(linkClassName)
  for(var i = 0; i < links.length; i++){
    expandTwitterLink(links[i])
  }
}

function expandAddedTwitterLinks(){
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
      var addedNodes = mutation.addedNodes
      for(var i = 0; i < addedNodes.length; i++){
        var links = addedNodes[i].querySelectorAll("." + linkClassName)
        for(var j = 0; j < links.length; j++){
          expandTwitterLink(links[j])
        }
      }
    })
  })
  observer.observe(document, {
    childList: true,
    subtree: true
  });
}

function expandTwitterLink(linkElem){
  if(linkElem.getAttribute("href")){
    var originalLink = linkElem.getAttribute("data-expanded-url")
    if(originalLink){
      linkElem.setAttribute("href", originalLink)
    }
  }
}

expandAddedTwitterLinks()
expandCurrentTwitterLinks()
