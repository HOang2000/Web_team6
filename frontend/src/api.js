import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost/api`,
  headers:{
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export const Signin = (account) => {
  return api.post(`/auth/login`,JSON.stringify(account));
} 

export const Signup = (account) => {
  return api.post(`/auth/signup`,JSON.stringify(account));
} 

export const Logout = (account) => {
  return api.get(`auth/logout`,  {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const ViewMyProfile = (account) => {
  return api.get(`profile`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const ViewOtherProfile = (account, other_id) => {
  return api.get(`profile/${other_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const UpdateProfile = (account, userDataUpdate) => {
  return api.put(`profile/edit`,userDataUpdate, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const SendMessage = (account, sendMessageData) => {
  return api.put(`message/send`, sendMessageData,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const GetMessages = (account) => {
  return api.get(`/message`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const ReadMessage = (account,idConversation) => {
  return api.get(`/message/${idConversation}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const getListUser = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `auth/list?offset=${offset}&limit=${limit}&random=${random}` 
                                  : `auth/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getListStudent = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `student/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `student/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getListCompany = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `company/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `company/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getListSchool = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `school/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `school/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const followUser = (account, other_id) => {
  return api.get(`follow/add?id=${other_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const unfollowUser = (account, other_id) => {
  return api.get(`follow/remove?id=${other_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const uploadCover = (account,file) => {
  return api.post('file/cover',file, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const getCover = (id) => {
  return api.get(`file/cover?id=${id}`);
}

export const uploadAvatar = (account,file) => {
  return api.post('file/avatar',file, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const getAvatar = (id) => {
  return api.get(`file/avatar?id=${id}`);
}

/* hobby */
export const getListHobby = (account,offset = 0, limit = 10, random = 0) => {
  return api.get(account && account.is_login ? `hobby/list?offset=${offset}&limit=${limit}&random=${random}`
                                  : `hobby/listguest?offset=${offset}&limit=${limit}&random=${random}`,
                {headers:{
                  'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
                }})
}

export const getHobbies = () => {
  return api.get('hobby/list')
}

export const removeHobby = (account,hobby_id) => {
  return api.get(`hobby/remove?hobby_id=${hobby_id}`, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const getStudentHobby = (id) => {
  return api.get(`hobby/user?id=${id}`);
}

export const addStudentHobby = (account, hobby_id) => {
  return api.post(`hobby/add`, hobby_id, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}
/* end of hobby */

/* experience */
export const getExperience = (id) => {
  return api.get(`exp/list?id=${id}`);
}
export const addExperience = (account, exp_request) => {
  return api.post(`exp/add`, exp_request, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}
export const removeExperience = (account,exp_id) => {
  return api.post(`exp/remove`,{exp_id},{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}
/* end of experience */

/* programming language */
export const getStudentProgrammingLanguage = (id) => {
 return api.get(`student-programlanguage/list?id=${id}`);
}
export const getListProgrammingLanguage = () => {
  return api.get(`program-language/list`);
}
export const addStudentProgrammingLanguage = (account, data) => {
  return api.post(`student-programlanguage/add`, data, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}
export const removeProgramLanguage = (account, id) => {
  return api.post(`student-programlanguage/remove`, {id}, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}
/*end of programming language*/ 

/* language */
export const getStudentLanguage = (id) => {
  return api.get(`student-language/list?id=${id}`);
 }
 export const getListLanguage = () => {
   return api.get(`language/list`);
 }
 export const addStudentLanguage = (account, data) => {
   return api.post(`student-language/add`, data, {headers:{
     'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
   }});
 }
 export const removeStudentLanguage = (account, id) => {
   return api.post(`student-language/remove`, {id}, {headers:{
     'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
   }});
 }
 /*end of language*/ 

export const addJob = (account, data) => {
  return api.put(`job/add`,data, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const addPost = (account, data) => {
  return api.post(`post/add`,data, {headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const getCountry = () => {
  return api.get('country');
}

export const getJobType = () => {
  return api.get('job/get-type');
}

export const getAvailabilties = () => {
  return api.get('job/get-availabilty');
}

export const getJobExperience = () => {
  return api.get('job/get-experience');
}

export const getJobs = () => {
  return api.get('job/list');
}

export const getNormalPost = () => {
  return api.get('post/normal');
}

export const getJobPost = () => {
  return api.get('/post/job');
}

export const getMyNormalPost = (id) => {
  return api.get(`post/normal?id=${id}`);
}

export const getMyJobPost = (id) => {
  return api.get(`/post/job?id=${id}`);
}

export const getJob = (account,job_id) => {
  return api.get(`job/info?id=${job_id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const comment = (account, comment) => {
  return api.post('comment-post/add',comment,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const getComment = (account,post_id) => {
  return api.get(`comment-post/get?post_id=${post_id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const like = (account,post_id) => {
  return api.post('like-post/add',post_id,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const unlike = (account,post_id) => {
  return api.post('like-post/remove',post_id,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const getLike = (account,post_id) => {
  return api.get(`like-post/get?post_id=${post_id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const getProgramLanguage = () => {
  return api.get('program-language/list');
}

export const getTopViewer = () => {
  return api.get('viewer/profile');
}

export const getNotice = (account, limit=5) => {
  return api.get(`notice/get?limit=${limit}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const removeNotice = (account) => {
  return api.get(`notice/remove`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }});
}

export const filterJob = (data) => {
  return api.post('search/job', data)
}

export const filterUser = (data) => {
  return api.post('search/user',data)
}

export const statsIndex = () => {
  return api.get('stats')
}

export const statsInSchool = (school_id) => {
  return api.get(`stats/school?school_id=${school_id}`)
}

export const statsInCompany = (company_id) => {
  return api.get(`stats/company?company_id=${company_id}`)
}

export const vote = (account,data) => {
  return api.put(`vote`,data,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const getScore = (id) => {
  return api.get(`score/${id}`)
}

export const adminUser = (account) => {
  return api.get(`admin/user`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminUserChangeActive = (account, id) => {
  return api.get(`admin/user/change-active?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}


export const adminCountry = (account) => {
  return api.get(`admin/country`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminCountryAdd = (account, name) => {
  return api.post(`admin/country/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminCountryRemove = (account, id) => {
  return api.get(`admin/country/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminHobby = (account) => {
  return api.get(`admin/hobby`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminHobbyAdd = (account, name) => {
  return api.post(`admin/hobby/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminHobbyRemove = (account, id) => {
  return api.get(`admin/hobby/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminPrLg = (account) => {
  return api.get(`admin/program-language`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminPrLgAdd = (account, name) => {
  return api.post(`admin/program-language/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminPrlgRemove = (account, id) => {
  return api.get(`admin/program-language/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminLanguage = (account) => {
  return api.get(`admin/language`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminLanguageAdd = (account, name) => {
  return api.post(`admin/language/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminLanguageRemove = (account, id) => {
  return api.get(`admin/language/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminJobType = (account) => {
  return api.get(`admin/job-type`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminJobTypeAdd = (account, name) => {
  return api.post(`admin/job-type/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminJobTypeRemove = (account, id) => {
  return api.get(`admin/job-type/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminAvailabilty = (account) => {
  return api.get(`admin/job-availabilty`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminAvailabiltyAdd = (account, name) => {
  return api.post(`admin/job-availabilty/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminAvailabiltyRemove = (account, id) => {
  return api.get(`admin/job-availabilty/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminExp = (account) => {
  return api.get(`admin/job-experience`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminExpAdd = (account, name) => {
  return api.post(`admin/job-experience/add`,name,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}

export const adminExpRemove = (account, id) => {
  return api.get(`admin/job-experience/remove?id=${id}`,{headers:{
    'Authorization': account ? `${account.token_type} ${account.access_token}` : ''
  }})
}