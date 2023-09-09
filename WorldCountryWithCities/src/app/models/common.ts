export class LoginRequest {
  constructor(
    public email: string,
    public password: string
  ) { }
}



export class LoginResult {
  constructor(
    public success: boolean,
    public message: string,
    public token?: string
  ) { }
}




export class City {
  id: number = 0;
  name: string = '';
  lat: number = 0;
  lon: number = 0;
  countryId: number = 0;
  countryName: string = '';
}



