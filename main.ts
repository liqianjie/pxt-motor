

//% weight=10 color=#ff7d0a icon="\uf2d6" block="Magibit"
namespace Magibit {

    export enum Motors {
        M1 = 0x1,
        M2 = 0x2
    }

    export enum Light {
        P0 = AnalogPin.P0,
        P1 = AnalogPin.P1,
        P2 = AnalogPin.P2
    }


    export enum P1316 {
        P13 = DigitalPin.P13,
        P16 = DigitalPin.P16
    }


    /**
     * Read Light
     * @param pin Light Index; eg: AnalogPin.P0,AnalogPin.P1
    */
      //% blockId=maiji_light block="Light read analog at|%pin"
      //% weight=81
      export function LightRead(pin: Light): number{
        let lightRead = 0;
        lightRead =  pins.analogReadPin(pin);
        return lightRead;
      }


      //% blockId=maiji_sound block="Sound read analog at|%pin"
      //% weight=81
      export function SoundRead(pin: Light): number{
        let lightRead = 0;
        lightRead =  pins.analogReadPin(pin);
        return lightRead;
      }


      //% blockId=maiji_soil_moisture block="Soil Moisture read analog at|%pin"
      //% weight=81
      export function SoilMoistureRead(pin: Light): number{
        let lightRead = 0;
        lightRead =  pins.analogReadPin(pin);
        return lightRead;
      }


      //% blockId=maiji_Potentiometer block="Potentiometer read analog at|%pin"
      //% weight=81
      export function PotentiometerRead(pin: Light): number{
        let lightRead = 0;
        lightRead =  pins.analogReadPin(pin);
        return lightRead;
      }

      //% blockId=maiji_infrared block="Infrared read digital at|%pin"
      //% weight=81
      export function InfraredRead(pin: P1316): number{
        let lightRead = 0;
        lightRead =  pins.digitalReadPin(pin);
        return lightRead;
      }

      //% blockId=maiji_ultrasonic_sensor block="Ultrasonic Sensor read digital at|%pin"
      //% weight=81
      export function UltrasonicSensorRead(pin: P1316): number{
        let lightRead = 0;
        lightRead =  pins.digitalReadPin(pin);
        return lightRead;
      }

      //% blockId=maiji_air_temperature block="Air Temperature read digital at|%pin"
      //% weight=81
      export function AirTemperatureRead(pin: P1316): number{
        let lightRead = 0;
        lightRead =  pins.digitalReadPin(pin);
        return lightRead;
      }

      //% blockId=maiji_air_humidity block="Air Humidity read digital at|%pin"
      //% weight=81
      export function AirHumidityRead(pin: P1316): number{
        let lightRead = 0;
        lightRead =  pins.digitalReadPin(pin);
        return lightRead;
      }

      //% blockId=maiji_Motor_Speed_Sensor block="Motor Speed Sensor read digital at|%pin"
      //% weight=81
      export function MotorSpeedSensorRead(pin: P1316): number{
        let lightRead = 0;
        lightRead =  pins.digitalReadPin(pin);
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

    //% blockId=maiji_stop_all block="Motor Stop All"
    //% weight=79
    //% blockGap=50
    export function MotorStopAll(): void {
        for (let idx = 1; idx <= 2; idx++) {
            MotorStop(idx);
        }
    }


}
