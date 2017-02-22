  _onScroll() {
    window.onscroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = (document.body && document.body.scrollTop)
      const contentArr = ['home', 'about', 'portfolio', 'contact', 'resume'];
      let newCont= '';
      if(scrollTop === -1) {
        console.log("top!");
        contentArr.forEach((value, i) => {
          if(this.state.contentType === value) {
            i -= 1;
            newCont = contentArr[i];
            return newCont;
          }
        });  
        return this._changeContent(newCont);
      }
      else if (totalHeight === (scrollTop + clientHeight)) {
        console.log("bottom!");
        contentArr.forEach((value, i) => {
          if(this.state.contentType === value) {
            i += 1;
            newCont = contentArr[i];
            return newCont;
          }
        });  
        return this._changeContent(newCont);
      }
    };
  }