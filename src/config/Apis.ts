import axios from 'axios';

const URL: string = 'https://shikhhangon.bangabandhuolympiad.com';

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  email: string;
  contact: string;
  password: string;
  image: string;
}

export const Login_Api = async (data: LoginProps) => {
  return axios
    .post(`${URL}/login`, {email: data.email, password: data.password})
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Register_api = async (data: RegisterProps) => {
  return axios
    .post(`${URL}/register`, {data})
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_Notices_Api = async (type: string) => {
  return axios
    .post(`${URL}/articles`, {type: type})
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Education_Loan_api = async () => {
  return axios
    .get(`${URL}/educationloan`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_Blogs_api = async () => {
  return axios
    .get(`${URL}/blogs`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_Elearning_api = async () => {
  return axios
    .get(`${URL}/elearning`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_HealthServie_api = async () => {
  return axios
    .get(`${URL}/healthservice`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_EducationECommerce_api = async () => {
  return axios
    .get(`${URL}/educationecommerce`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_EducationLoan_api = async () => {
  return axios
    .get(`${URL}/educationloan`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_TuitonTuitor_api = async () => {
  return axios
    .get(`${URL}/tuitontuitor`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_ESheba_api = async () => {
  return axios
    .get(`${URL}/smssheba`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const Get_Training_api = async () => {
  return axios
    .get(`${URL}/training`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
};
