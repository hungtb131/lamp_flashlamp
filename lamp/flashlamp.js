let FlashLamp = function (){
    this.setBattery = function(battery){
        this.battery=battery;
    }
    this.getBatteryInfo = function(){
        //this.battery.decreaseEnergy();
        return this.battery.getEnergy();
    }
    this.light = function (){
        if(this.status==true)
            alert("Lighting!");
        else
            alert("Not lighting!");
    }
    this.turnOn = function(){
        this.battery.decreaseEnergy();
        this.status=true;
    }
    this.turnOff = function(){
        this.battery.decreaseEnergy();
        this.status=false;
    }
}