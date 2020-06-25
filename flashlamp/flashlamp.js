let FlashLamp = function(){
    this.setBattery = function (battery) {
        this.battery=battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status) {
            document.write("<br>Den dang sang");
        } else {
            document.write("<br>Den dang tat");
        }
    }
    this.turnOn = function (){
        this.battery.decreaseEnergy();
        this.status=true;
    }
    this.turnOff = function (){

        this.status=false;
    }

}