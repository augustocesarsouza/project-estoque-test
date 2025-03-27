import axios, {  AxiosInstance } from 'axios';
import { AxiosError } from "axios";
import { User } from '../../Interfaces/Entity/User.';

export interface ReturnGetUser {
  data: User,
  isSucess: boolean;
}

class UserService {
  private baseUrl: string;
  private http: AxiosInstance;

  constructor(){
    this.baseUrl = import.meta.env.VITE__APP_APP_BASE_URL;
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getByIdInfoUser(userId: string): Promise<ReturnGetUser | null> {
    try {
      const response = await this.http.get<ReturnGetUser>(`/public/user/get-user/${userId}`, {
        headers: {
          // Authorization: `Bearer ${token}`,
          // uid: userId,
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch(err) {
      const error = err as AxiosError;
      console.log(error);
      

      if(error.status === 400){
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ReturnGetUser;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = "/login";
        return null;
      }
      
      return null;
    }
  }

  async create(user: User): Promise<ReturnGetUser | null> {
    try {
      const response = await this.http.post<ReturnGetUser>(`/public/user/create`, user);
      
      return response.data;
    } catch(err) {
      const error = err as AxiosError;
      console.log(error);
      

      if(error.status === 400){
        const dataAxios = error.response?.data;
        const dataBack = dataAxios as ReturnGetUser;

        return dataBack;
      }

      if (error.status === 403 || error.status === 401) {
        localStorage.removeItem('user');
        // nav('/login');
        window.location.href = "/login";
        return null;
      }
      
      return null;
    }
  }
}

const userService = new UserService();
export default userService;