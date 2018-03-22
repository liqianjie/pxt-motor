

//% weight=10 color=#9F79EE icon="\uf1d0" block="Magibit"
namespace Magibit {

    export enum Motors {
        M1 = 0x1,
        M2 = 0x2
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
    //% blockId=maiji_motor_rundelay block="Motor|%index|speed %speed|delay %delay|s"
    //% weight=81
    //% speed.min=-1023 speed.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay * 1000);
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

    //% blockId=robotbit_stop_all block="Motor Stop All"
    //% weight=79
    //% blockGap=50
    export function MotorStopAll(): void {
        for (let idx = 1; idx <= 2; idx++) {
            MotorStop(idx);
        }
    }


}
