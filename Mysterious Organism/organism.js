// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // My code from here
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        const basePosition = Math.floor(Math.random() * 15);
        let newBase = returnRandBase();
        while (dna[basePosition] === newBase) {
          newBase = returnRandBase();
        }
        dna[basePosition] = newBase;
        return this.dna;
      },
      compareDNA(other) {
        let commonBases = 0;
        for (i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === other.dna[i]) {
            commonBases++;
          }
        }
        console.log(
          `Specimen ${this.specimenNum} and Specimen ${
            other.specimenNum
          } share ${commonBases} bases, representing a ${(
            (commonBases / 15) *
            100
          ).toFixed(0)}% shared genome.`
        );
      },
      willLikelySurvive() {
        let CGbases = 0;
        for (i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === "C" || this.dna[i] === "G") {
            CGbases++;
          }
        }
        if ((CGbases / 15) * 100 > 60) {
          return true;
        } else {
          return false;
        }
      },
      complementStrand() {
        const complementStrand = dna.map(x => x);
        for (let i = 0; i < complementStrand.length; i++) {
          switch (complementStrand[i]) {
            case 'C':
              complementStrand[i] = 'G';
              break;
            case 'G':
              complementStrand[i] = 'C';
              break;
            case 'A':
              complementStrand[i] = 'T';
              break;
            case 'T':
              complementStrand[i] = 'A';
              break;
          }
        }
        return complementStrand;
      },
    };
  };
  
  // const specimenAlpha = pAequorFactory(001, mockUpStrand());
  // const specimenBeta = pAequorFactory(002, mockUpStrand());
  // console.log(specimenAlpha.dna);
  // console.log(specimenAlpha.mutate());
  // specimenAlpha.compareDNA(specimenBeta);
  
  const createSurvivors = (number) => {
    let survivorBois = [];
    while (survivorBois.length < number) {
      const testBoi = pAequorFactory(survivorBois.length + 1, mockUpStrand());
      if (testBoi.willLikelySurvive() === true) {
        survivorBois.push(["Specimen " + testBoi.specimenNum, testBoi.dna]);
      }
    }
    return survivorBois;
  };
  
  // console.log(createSurvivors(30));
  
  const testBoi = pAequorFactory(1337, mockUpStrand());
  console.log(testBoi.dna);
  console.log(testBoi.complementStrand());