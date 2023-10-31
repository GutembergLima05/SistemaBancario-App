import api from "./api";

export default function useAuth(){

    const autenticar = async (email,senha) => {
        try {
          const response = await api.post('/login', {
            email,
            senha
          });
          const token = response.data.token;
          localStorage.setItem('token', token);
        } catch (error) {
          console.log(error)
        }
      };

      const logout = () => {
        localStorage.removeItem('token');
      }
      
      return {
        autenticar,
        logout
      }
}