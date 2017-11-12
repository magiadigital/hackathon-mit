import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
  private selectedCandidate = {
    title: null,
    candidate: null,
    candidate_alt: null,
    party: null,
    party_alt: null
  };

  constructor() { }

  setSelectedCandidate (candidate) {
    this.selectedCandidate.title = candidate.title;
    this.selectedCandidate.candidate = candidate.candidate;
    this.selectedCandidate.candidate_alt = candidate.candidate_alt;
    this.selectedCandidate.party = candidate.party;
    this.selectedCandidate.party_alt = candidate.party_alt;
  }

  getSelectedCandidate() {
    return this.selectedCandidate;
  }

}
