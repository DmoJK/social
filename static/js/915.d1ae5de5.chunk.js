"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[915],{6915:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var o=s(8683),i=s(885),a=s(3531),n=s(2791),r={postBlock:"MyPosts_postBlock__dvM-z",posts:"MyPosts_posts__GSiZ2",postsArea:"MyPosts_postsArea__pw3q+"},l="Post_item__Yu4oG",c=s(184),u=function(t){return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)("img",{src:"https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg"}),t.message,(0,c.jsx)("div",{children:(0,c.jsx)("span",{children:"like "+t.likesCount})})]},"key")},d=s(5705),p=s(6004),f=s(5878),x=n.memo((function(t){var e=t.postsData.map((function(t){return(0,c.jsx)(u,{message:t.message,likesCount:t.likesCount},t.id)}));return t.isOwner?(0,c.jsx)("div",{children:(0,c.jsx)(d.J9,{initialValues:{addPost:""},validationSchema:f.sp,onSubmit:function(e,s){t.addPost(e.addPost),s.resetForm()},children:function(t){var s=t.isValid,o=t.dirty;return(0,c.jsxs)("div",{className:r.postBlock,children:[(0,c.jsx)("h3",{children:"My posts"}),(0,c.jsxs)(d.l0,{className:r.postArea,children:[(0,c.jsx)(p.Z,{placeholder:"What's new",name:"addPost",type:"text"}),(0,c.jsx)("button",{disabled:!s||!o,type:"submit",children:"Add post"})]}),(0,c.jsx)("div",{className:r.posts,children:e})]})}})}):(0,c.jsxs)("div",{className:r.postBlock,children:[(0,c.jsx)("h3",{children:"Posts"}),(0,c.jsx)("div",{className:r.posts,children:e})]})})),m="Profile_profile__VHbzQ",j=s(354),h={descriptionBlock:"ProfileInfo_descriptionBlock__XBXuJ",descriptionText:"ProfileInfo_descriptionText__O9emB",fullName:"ProfileInfo_fullName__3fR7R",main:"ProfileInfo_main__O3-Uw",statusOwner:"ProfileInfo_statusOwner__iOliW",contacts:"ProfileInfo_contacts__hKq1Z",about:"ProfileInfo_about__n8Drc",descriptionImg:"ProfileInfo_descriptionImg__QC9hc"},b=s(7572),v=function(t){return(0,c.jsxs)("div",{className:h.descriptionImg,children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:t.avaLarge||b})}),(0,c.jsx)("div",{children:t.isOwner&&(0,c.jsx)("input",{type:"file",onChange:t.onNewPhoto})}),(0,c.jsx)("div",{children:t.isOwner?t.editMode?(0,c.jsx)("button",{onClick:t.deactivateMode,children:"Go to profile"}):(0,c.jsx)("button",{onClick:t.activateMode,children:"Go to edit"}):""})]})},g=s(9676),k=function(t){return(0,c.jsx)("div",{children:(0,c.jsx)(d.J9,{initialValues:{fullName:t.fullName,aboutMe:t.aboutMe?t.aboutMe:"",lookingForAJob:t.lookingForAJob?t.lookingForAJob:"",lookingForAJobDescription:t.lookingForAJobDescription?t.lookingForAJobDescription:"",contacts:t.contacts},onSubmit:function(e){t.updateProfile(e)},validationSchema:f.Rw,children:function(e){var s=e.isValid,o=e.dirty,i=e.isSubmitting;return(0,c.jsxs)(d.l0,{className:h.descriptionText,children:[(0,c.jsx)(g.Z,{label:"Name: ",name:"fullName",type:"text"}),(0,c.jsx)(g.Z,{label:"AboutMe: ",name:"aboutMe",type:"text"}),(0,c.jsx)(g.Z,{label:"lookingForAJob: ",name:"lookingForAJob",type:"checkbox"}),(0,c.jsx)(g.Z,{label:"lookingForAJobDescription: ",name:"lookingForAJobDescription",type:"text"}),(0,c.jsx)("div",{children:"Contacts"}),(0,c.jsx)("div",{className:h.contacts,children:Object.keys(t.contacts).map((function(t){return(0,c.jsx)(g.Z,{label:"".concat(t,": "),name:"contacts."+t,type:"text"},t)}))}),(0,c.jsx)("button",{disabled:!s||!o||i,type:"submit",children:"Save changes"})]})}})})},P=function(t){var e=(0,n.useState)(!1),s=(0,i.Z)(e,2),o=s[0],a=s[1],r=(0,n.useState)(t.status),l=(0,i.Z)(r,2),u=l[0],d=l[1];return(0,n.useEffect)((function(){d(t.status)}),[t.status]),t.isOwner?(0,c.jsxs)("div",{children:[!o&&(0,c.jsx)("div",{className:h.statusOwner,children:(0,c.jsx)("span",{onDoubleClick:function(){a(!0)},children:t.status||"no status"})}),o&&(0,c.jsx)("div",{children:(0,c.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),t.updateStatus(u)},onChange:function(t){d(t.currentTarget.value)},value:u})})]}):(0,c.jsx)("div",{className:h.status,children:(0,c.jsx)("span",{children:t.status||"no status"})})},_=function(t){return(0,c.jsxs)("div",{className:h.descriptionText,children:[(0,c.jsxs)("div",{className:h.main,children:[(0,c.jsx)("div",{className:h.fullName,children:t.fullName}),(0,c.jsx)(P,{status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner})]}),(0,c.jsxs)("div",{className:h.about,children:["About Me",(0,c.jsxs)("div",{children:["Me: ",t.aboutMe]}),(0,c.jsxs)("div",{children:["About Job: ",t.lookingForAJob?"Looking for a job: ":"Not looking for a job"]}),(0,c.jsxs)("div",{children:["Job Description: ",t.lookingForAJobDescription]}),(0,c.jsx)("div",{children:"Contacts"}),(0,c.jsx)("div",{className:h.contacts,children:Object.keys(t.contacts).map((function(e){return(0,c.jsxs)("div",{children:[e,": ",t.contacts[e]]},e)}))})]})]})},N=function(t){var e=(0,n.useState)(!1),s=(0,i.Z)(e,2),o=s[0],a=s[1];if(!t.profile)return(0,c.jsx)(j.Z,{});return(0,c.jsxs)("div",{className:h.descriptionBlock,children:[(0,c.jsx)(v,{avaLarge:t.profile.photos.large,isOwner:t.isOwner,onNewPhoto:function(e){e.target.files.length&&t.updatePhoto(e.target.files[0])},activateMode:function(){a(!0)},deactivateMode:function(){a(!1)},editMode:o}),o?(0,c.jsx)(k,{fullName:t.profile.fullName,status:t.status,updateStatus:t.updateStatus,aboutMe:t.profile.aboutMe,lookingForAJob:t.profile.lookingForAJob,lookingForAJobDescription:t.profile.lookingForAJobDescription,contacts:t.profile.contacts,updateProfile:t.updateProfile}):(0,c.jsx)(_,{fullName:t.profile.fullName,isOwner:t.isOwner,status:t.status,updateStatus:t.updateStatus,aboutMe:t.profile.aboutMe,lookingForAJob:t.profile.lookingForAJob,lookingForAJobDescription:t.profile.lookingForAJobDescription,contacts:t.profile.contacts})]})},A=function(t){return(0,c.jsxs)("div",{className:m,children:[(0,c.jsx)(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:t.isOwner,updatePhoto:t.updatePhoto,updateProfile:t.updateProfile}),(0,c.jsx)(x,{isOwner:t.isOwner,addPost:t.addPost,postsData:t.postsData})]})},w=s(6070),J=s(7689),S=s(1548),O=s(7781),M=s(61),D=function(t){return t.profilePage.profile},F=function(t){return t.profilePage.status};var y=(0,O.qC)((0,a.$j)((function(t){return{profile:D(t),status:F(t),id:(0,M.n5)(t),postsData:t.profilePage.postsData}}),{getProfile:w.Ai,getStatus:w.lR,updateStatus:w.Nf,updatePhoto:w.tU,updateProfile:w.ck,addPost:w.q2}),(function(t){return function(e){var s=(0,J.TH)(),i=(0,J.s0)(),a=(0,J.UO)();return(0,c.jsx)(t,(0,o.Z)((0,o.Z)({},e),{},{router:{location:s,navigate:i,params:a}}))}}),S.D)((function(t){var e=(0,n.useState)(!1),s=(0,i.Z)(e,2),a=s[0],r=s[1];return(0,n.useEffect)((function(){!function(){var e=t.router.params.userId;t.getProfile(e),t.getStatus(e),t.router.params.userId==t.id?r(!0):r(!1)}()}),[t.router.params.userId]),(0,c.jsx)(A,(0,o.Z)((0,o.Z)({},t),{},{profile:t.profile,status:t.status,updateStatus:t.updateStatus,isOwner:a,updatePhoto:t.updatePhoto,updateProfile:t.updateProfile,addPost:t.addPost,postsData:t.postsData}))}))},7572:function(t,e,s){t.exports=s.p+"static/media/avaDefault.b225dc5d4113a77c72ba.jpeg"}}]);
//# sourceMappingURL=915.d1ae5de5.chunk.js.map