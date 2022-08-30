// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ConfirmedAttendee extends ethereum.Event {
  get params(): ConfirmedAttendee__Params {
    return new ConfirmedAttendee__Params(this);
  }
}

export class ConfirmedAttendee__Params {
  _event: ConfirmedAttendee;

  constructor(event: ConfirmedAttendee) {
    this._event = event;
  }

  get eventID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get attendeeAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DepositsPaidOut extends ethereum.Event {
  get params(): DepositsPaidOut__Params {
    return new DepositsPaidOut__Params(this);
  }
}

export class DepositsPaidOut__Params {
  _event: DepositsPaidOut;

  constructor(event: DepositsPaidOut) {
    this._event = event;
  }

  get eventID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class NewEventCreated extends ethereum.Event {
  get params(): NewEventCreated__Params {
    return new NewEventCreated__Params(this);
  }
}

export class NewEventCreated__Params {
  _event: NewEventCreated;

  constructor(event: NewEventCreated) {
    this._event = event;
  }

  get eventID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get creatorAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get eventTimestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get maxCapacity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get deposit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get eventDataCID(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class NewRSVP extends ethereum.Event {
  get params(): NewRSVP__Params {
    return new NewRSVP__Params(this);
  }
}

export class NewRSVP__Params {
  _event: NewRSVP;

  constructor(event: NewRSVP) {
    this._event = event;
  }

  get eventID(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get attendeeAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Web3RSVP__idToEventResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: string;
  value5: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: string,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getEventOwner(): Address {
    return this.value0;
  }

  getEventTimestamp(): BigInt {
    return this.value1;
  }

  getDeposit(): BigInt {
    return this.value2;
  }

  getMaxCapacity(): BigInt {
    return this.value3;
  }

  getEventDataCID(): string {
    return this.value4;
  }

  getPaidOut(): boolean {
    return this.value5;
  }
}

export class Web3RSVP extends ethereum.SmartContract {
  static bind(address: Address): Web3RSVP {
    return new Web3RSVP("Web3RSVP", address);
  }

  idToEvent(param0: Bytes): Web3RSVP__idToEventResult {
    let result = super.call(
      "idToEvent",
      "idToEvent(bytes32):(address,uint256,uint256,uint256,string,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new Web3RSVP__idToEventResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toString(),
      result[5].toBoolean()
    );
  }

  try_idToEvent(param0: Bytes): ethereum.CallResult<Web3RSVP__idToEventResult> {
    let result = super.tryCall(
      "idToEvent",
      "idToEvent(bytes32):(address,uint256,uint256,uint256,string,bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Web3RSVP__idToEventResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toString(),
        value[5].toBoolean()
      )
    );
  }
}

export class ConfirmAllAttendeesCall extends ethereum.Call {
  get inputs(): ConfirmAllAttendeesCall__Inputs {
    return new ConfirmAllAttendeesCall__Inputs(this);
  }

  get outputs(): ConfirmAllAttendeesCall__Outputs {
    return new ConfirmAllAttendeesCall__Outputs(this);
  }
}

export class ConfirmAllAttendeesCall__Inputs {
  _call: ConfirmAllAttendeesCall;

  constructor(call: ConfirmAllAttendeesCall) {
    this._call = call;
  }

  get eventId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ConfirmAllAttendeesCall__Outputs {
  _call: ConfirmAllAttendeesCall;

  constructor(call: ConfirmAllAttendeesCall) {
    this._call = call;
  }
}

export class ConfirmAttendeeCall extends ethereum.Call {
  get inputs(): ConfirmAttendeeCall__Inputs {
    return new ConfirmAttendeeCall__Inputs(this);
  }

  get outputs(): ConfirmAttendeeCall__Outputs {
    return new ConfirmAttendeeCall__Outputs(this);
  }
}

export class ConfirmAttendeeCall__Inputs {
  _call: ConfirmAttendeeCall;

  constructor(call: ConfirmAttendeeCall) {
    this._call = call;
  }

  get eventId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get attendee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConfirmAttendeeCall__Outputs {
  _call: ConfirmAttendeeCall;

  constructor(call: ConfirmAttendeeCall) {
    this._call = call;
  }
}

export class CreateNewEventCall extends ethereum.Call {
  get inputs(): CreateNewEventCall__Inputs {
    return new CreateNewEventCall__Inputs(this);
  }

  get outputs(): CreateNewEventCall__Outputs {
    return new CreateNewEventCall__Outputs(this);
  }
}

export class CreateNewEventCall__Inputs {
  _call: CreateNewEventCall;

  constructor(call: CreateNewEventCall) {
    this._call = call;
  }

  get eventTimestamp(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get deposit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxCapacity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get eventDataCID(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateNewEventCall__Outputs {
  _call: CreateNewEventCall;

  constructor(call: CreateNewEventCall) {
    this._call = call;
  }
}

export class CreateNewRSVPCall extends ethereum.Call {
  get inputs(): CreateNewRSVPCall__Inputs {
    return new CreateNewRSVPCall__Inputs(this);
  }

  get outputs(): CreateNewRSVPCall__Outputs {
    return new CreateNewRSVPCall__Outputs(this);
  }
}

export class CreateNewRSVPCall__Inputs {
  _call: CreateNewRSVPCall;

  constructor(call: CreateNewRSVPCall) {
    this._call = call;
  }

  get eventId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CreateNewRSVPCall__Outputs {
  _call: CreateNewRSVPCall;

  constructor(call: CreateNewRSVPCall) {
    this._call = call;
  }
}

export class WithdrawUnclaimedDepositsCall extends ethereum.Call {
  get inputs(): WithdrawUnclaimedDepositsCall__Inputs {
    return new WithdrawUnclaimedDepositsCall__Inputs(this);
  }

  get outputs(): WithdrawUnclaimedDepositsCall__Outputs {
    return new WithdrawUnclaimedDepositsCall__Outputs(this);
  }
}

export class WithdrawUnclaimedDepositsCall__Inputs {
  _call: WithdrawUnclaimedDepositsCall;

  constructor(call: WithdrawUnclaimedDepositsCall) {
    this._call = call;
  }

  get eventId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class WithdrawUnclaimedDepositsCall__Outputs {
  _call: WithdrawUnclaimedDepositsCall;

  constructor(call: WithdrawUnclaimedDepositsCall) {
    this._call = call;
  }
}
