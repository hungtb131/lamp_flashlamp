let Battery = function (energy){
    this.energy=energy;

    this.setEnergy = function (energy){
        this.energy=energy;
    }
    this.getEnergy = function (){
        return this.energy;
    }
    this.decreaseEnergy = function (){
        this.energy--;
    }
}