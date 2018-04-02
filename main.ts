

//% weight=10 color=#ff7d0a icon="\uf2d6" block="Magibit"
namespace Magibit {

    export enum Motors {
        M1 = 0x1,
        M2 = 0x2
    }

    export enum Light {
        P0 = 0,
        P1 = 1,
        P2 = 2
    }


    export enum P1316 {
        P13 = DigitalPin.P13,
        P16 = DigitalPin.P16
    }

    export enum A1 {
        P1 = DigitalPin.P1,
        P2 = DigitalPin.P2
    }

    export enum A2 {
        P0 = DigitalPin.P0,
        P1 = DigitalPin.P1
    }

    export enum A12 {
        A1 = 0x1,
        A2 = 0x2
    }

    export enum ONOFF {
        ON = 0x1,
        OFF = 0x0
    }

    export enum Servos {
        P0 = DigitalPin.P0,
        P1 = DigitalPin.P1,
        P2 = DigitalPin.P2,
        P13 = DigitalPin.P13,
        P16 = DigitalPin.P16
    }


    //% blockId=maiji_light block="Light read analog at |%pin"
    export function LightRead(pin: Light): number{
      let lightRead = 0;

      AnalogPin pinTemp = AnalogPin.P0;
      if (pinTemp==1){
          pinTemp = AnalogPin.P1;
      }else if (pinTemp==2){
        pinTemp = AnalogPin.P2;
      }
      lightRead =  pins.analogReadPin(pinTemp);
      return lightRead;
    }

    //% blockId=maiji_sound block="Sound read analog at |%pin"
    export function SoundRead(pin: Light): number{
      let lightRead = 0;
      //lightRead =  pins.analogReadPin(pin);

      AnalogPin pinTemp = AnalogPin.P0;
      if (pinTemp==1){
          pinTemp = AnalogPin.P1;
      }else if (pinTemp==2){
        pinTemp = AnalogPin.P2;
      }
      lightRead =  pins.analogReadPin(pinTemp);
      return lightRead;
    }



    //% blockId=maiji_motor_run block="Motor|%index|speed %speed"
    //% weight=85
    //% speed.min=-1023 speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, speed: number): void {
      if (index==1){
        if (speed>0){
          pins.digitalWritePin(DigitalPin.P8,0);
          pins.analogWritePin(AnalogPin.P12,speed);
        }else{
          pins.digitalWritePin(DigitalPin.P8,1);
          pins.analogWritePin(AnalogPin.P12,-speed);
        }

      }else{
        if (speed>0){
          pins.digitalWritePin(DigitalPin.P14,0);
          pins.analogWritePin(AnalogPin.P15,speed);
        }else{
          pins.digitalWritePin(DigitalPin.P14,1);
          pins.analogWritePin(AnalogPin.P15,-speed);
        }
      }
    }

	/**
	 * Execute single motors with delay
	 * @param index Motor Index; eg: M1,M2
	 * @param speed [-1023-1023] speed of motor; eg: 150, -150
	 * @param delay seconde delay to stop; eg: 1
	*/
    //% blockId=maiji_motor_rundelay block="Motor|%index|speed %speed|delay %delay|ms"
    //% weight=81
    //% speed.min=-1023 speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay );
        MotorStop(index);
    }



    //% blockId=maiji_stop block="Motor Stop|%index|"
    //% weight=80
    export function MotorStop(index: Motors): void {
      if (index==1){
          pins.digitalWritePin(DigitalPin.P8,0);
          pins.digitalWritePin(DigitalPin.P12,0);
      }else{
          pins.digitalWritePin(DigitalPin.P14,0);
          pins.digitalWritePin(DigitalPin.P15,0);
      }
    }

    //% blockId=maiji_stop_all block="Motor Stop All"
    //% weight=79
    //% blockGap=50
    export function MotorStopAll(): void {
        for (let idx = 1; idx <= 2; idx++) {
            MotorStop(idx);
        }
    }


}
