export interface Dog {
  id: number;
  username: string;
  email: string;
  password: string;
  name: string;
  age: number;
  race: string,
  poids: number;
  gender: string;
  birthday: Date;
  location: string;
  interest: string[];
  sterilization: string;
  profile_picture: string;
}

export interface NewPassword{
  password: string;
  new_password: string;
  repeat_password: string
}

export interface Post {
  id: number;
  //dogId: number;
  content: string;
  image_url: string;
}

export interface Like {
  dogId: number;
  postId: number;
}

export interface Match {
  id: number;
  dog1Id: number;
  match_receiver: number;
  status: string;
}
