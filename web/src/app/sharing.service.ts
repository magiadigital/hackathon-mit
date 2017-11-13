import { Injectable } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Injectable()
export class SharingService {
  private selectedCandidate: any;
  private candidates: any;

  constructor() { }

  setSelectedCandidate (candidate) {
    this.selectedCandidate = candidate;
  }

  getSelectedCandidate() {
    return this.selectedCandidate;
  }

  setCandidates (candidates) {
    this.candidates = candidates;
  }

  getCandidates() {
    return this.candidates;
  }

  setLoader = function(val){
    if (val === true) {
      $('html').append('<div id="shadowBox" class="shadowBox"><div id="loader" class="sk-cube-grid centered"> <div class="sk-cube sk-cube1"></div> <div class="sk-cube sk-cube2"></div> <div class="sk-cube sk-cube3"></div> <div class="sk-cube sk-cube4"></div> <div class="sk-cube sk-cube5"></div> <div class="sk-cube sk-cube6"></div> <div class="sk-cube sk-cube7"></div> <div class="sk-cube sk-cube8"></div> <div class="sk-cube sk-cube9"></div> </div></div>').addClass('disabled');
    }else {
      $('html').removeClass('disabled');
      $('#loader').remove();
      $('#shadowBox').remove();
    }
  };

}
