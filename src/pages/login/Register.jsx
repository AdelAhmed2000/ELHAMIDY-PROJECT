import React, { Fragment, useState } from "react";
import "../../style/pages/register.css";
import logo from "../../image/logo.jpg";
import { Link, json, useNavigate } from "react-router-dom";
import { SelectCountry } from "../../component/selectCountry/SelectCountry";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import toast from "react-hot-toast";

export const Register = () => {
  const [selected, setSelected] = useState("");
  const [type, setType] = useState("selectType");
  const [experience, setExperience] = useState("");
  const [religion, setReligion] = useState("");
  const [health, setHealth] = useState("");
  const [entryVisa, setEntryVisa] = useState("");
  const [social, setSocial] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nameArabic: "",
    nameEnglish: "",
    date: "",
    type: "",
    religion: "",
    nationality: "",
    photoPersonal: "",
    newCountry: "",
    newState: "",
    newAddress: "",
    addressGoogle: "",
    phoneNumber: "",
    homeNumber: "",
    email: "",
    password: "",
    social: "",
    mainLanguage: "",
    secondLanguage: "",
    oneSkill: "",
    durationSkill: "",
    secSkill: "",
    durationSkillTwo: "",
    thirdSkill: "",
    durationSkillthird: "",
    photoCertificates: "",
    trainingNameOne: "",
    trainingTimeOne: "",
    PhotosTrainingCertificateOne: "",
    trainingNameSec: "",
    trainingTimeSec: "",
    PhotosTrainingCertificateSec: "",
    trainingNameThird: "",
    trainingTimeThird: "",
    PhotosTrainingCertificateThird: "",
    experience: "",
    areaExpertis: "",
    howLongExpertise: "",
  });
  // Handle selectNationality
  const disblayNationality = () => {
    let disblayNationality;
    if (selected === "") {
      disblayNationality = "";
    } else if (selected === "EG") {
      disblayNationality = (
        <>
          <div className="form-control border-0">
            <label htmlFor="healthStatus">الحالة الصحية</label>
            <select
              id="healthStatus"
              name="healthStatus"
              onChange={(e) => {
                handleChange(e);
                handleHealth(e);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="selectHealthStatus">حالتك الصحيه</option>
              <option value="healthy">سليم</option>
              <option value="UnHealthy">معاق</option>
            </select>
          </div>
          <div className="form-control border-0">
            <label htmlFor="photoIdCardFront">
              ادخل صوره البطاقه القوميه الخاصه بك
              <span className="text-danger"> الامامية</span>
            </label>
            <input
              onChange={handleChange}
              name="photoIdCardFront"
              id="photoIdCardFront"
              className="form-control"
              accept="image/*"
              type="file"
            ></input>
          </div>
          <div className="form-control border-0">
            <label htmlFor="photoIdCardBack">
              ادخل صوره البطاقه القوميه الخاصه بك
              <span className="text-danger">الخلفية </span>
            </label>
            <input
              onChange={handleChange}
              name="photoIdCardBack"
              id="photoIdCardBack"
              className="form-control"
              accept="image/*"
              type="file"
            ></input>
          </div>
          <div className="form-control border-0">
            <label htmlFor="nationalId">ادخل الرقم القومي</label>
            <input
              onChange={handleChange}
              id="nationalId"
              name="nationalId"
              className="form-control"
              placeholder="ادخل الرقم القومي"
              type="number"
            ></input>
          </div>
          <div className="form-control border-0">
            <label htmlFor="criminalCase">
              الفيش الجنائي
              <span className="text-danger"> *صورة فقط</span>
            </label>
            <input
              onChange={handleChange}
              name="criminalCase"
              id="criminalCase"
              className="form-control"
              type="file"
              accept="image/*"
            ></input>
          </div>
          <div className="form-control border-0">
            <label htmlFor="militaryService">الخدمة العسكرية</label>
            <select
              id="militaryService"
              name="militaryService"
              onChange={handleChange}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="selectService">حدد نوع اداء الخدمه</option>
              <option value="free">معافة</option>
              <option value="servicePerformed">اداء الخدمة</option>
              <option value="delayed">مؤجل</option>
              <option value="notChosen">لم يصبه الدور</option>
            </select>
          </div>
        </>
      );
    } else if (selected !== "EG") {
      disblayNationality = (
        <>
          <div className="form-control border-0">
            <label htmlFor="healthStatus">الحالة الصحية</label>
            <select
              id="healthStatus"
              name="healthStatus"
              onChange={(e) => {
                handleChange(e);
                handleHealth(e);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="selectHealthStatus">حالتك الصحيه</option>
              <option value="healthy">سليم</option>
              <option value="UnHealthy">معاق</option>
            </select>
          </div>
          <div className="form-control border-0">
            <label htmlFor="numberBassbor">رقم الباسبور</label>
            <input
              onChange={handleChange}
              id="numberBassbor"
              name="numberBassbor"
              className="form-control"
              type="text"
              placeholder="Passport number"
            ></input>
          </div>
          <div className="form-control border-0">
            <label htmlFor="entryVisa">تأشيره الدخول</label>
            <select
              id="entryVisa"
              name="entryVisa"
              onChange={(e) => {
                handleChange(e);
                handleEntryVisa(e);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="selectedEntryVisa">اختر نوع التاشيره</option>
              <option value="tourism">سياحة</option>
              <option value="work">عمل</option>
              <option value="refugee">لاجئ</option>
            </select>
          </div>
          <div className="form-control border-0">
            <label htmlFor="passportPhoto">
              صوره الباسبور
              <span className="text-danger">صوره فقط</span>
            </label>
            <input
              onChange={handleChange}
              name="passportPhoto"
              id="passportPhoto"
              className="form-control"
              accept="image/*"
              type="file"
            ></input>
          </div>
        </>
      );
    }
    return disblayNationality;
  };
  // Handle Input Religion
  const handleReligion = (e) => {
    setReligion(e.target.value);
  };
  // Handle Input Social
  const handleSocial = (e) => {
    setSocial(e.target.value);
  };
  // Display Input EntryVisa
  const displaySocial = () => {
    let selectSocial;
    if (social === "facebook") {
      selectSocial = (
        <div className="form-control border-0">
          <label htmlFor="facebook"> لينك الفيسبوك</label>
          <input
            onChange={handleChange}
            name="facebook"
            id="facebook"
            className="form-control"
            type="text"
          ></input>
        </div>
      );
    } else if (social === "linkedIn") {
      selectSocial = (
        <>
          <div className="form-control border-0">
            <label htmlFor="LinkedIn"> لينك اللينكدان</label>
            <input
              onChange={handleChange}
              name="LinkedIn"
              id="LinkedIn"
              className="form-control"
              type="text"
            ></input>
          </div>
        </>
      );
    } else if (social === "behance") {
      selectSocial = (
        <div className="form-control border-0">
          <label htmlFor="behance"> لينك البيهانس</label>
          <input
            onChange={handleChange}
            name="behance"
            id="behance"
            className="form-control"
            type="text"
          ></input>
        </div>
      );
    } else if (social === "instagram") {
      selectSocial = (
        <div className="form-control border-0">
          <label htmlFor="instagram"> لينك انستجرام</label>
          <input
            onChange={handleChange}
            name="instagram"
            id="instagram"
            className="form-control"
            type="text"
          ></input>
        </div>
      );
    }
    return selectSocial;
  };
  // Handle Input EntryVisa
  const handleEntryVisa = (e) => {
    setEntryVisa(e.target.value);
  };
  // Display Input EntryVisa
  const displayEntryVisa = () => {
    let selectEntryVisa;
    if (entryVisa === "refugee") {
      selectEntryVisa = (
        <>
          <div className="form-control border-0">
            <label htmlFor="EntryVisa">
              صوره بطاقة اللجوء
              <span className="text-danger"> *صور فقط</span>
            </label>
            <input
              onChange={handleChange}
              name="EntryVisa"
              id="EntryVisa"
              className="form-control"
              accept="image/*"
              type="file"
            ></input>
          </div>
        </>
      );
    }
    return selectEntryVisa;
  };
  // Handle Input Health
  const handleHealth = (e) => {
    setHealth(e.target.value);
  };
  // Display Input Health
  const displayHealth = () => {
    let selectHealth;
    if (health === "UnHealthy") {
      selectHealth = (
        <>
          <div className="form-control border-0">
            <label htmlFor="nameHealth">
              صوره بطاقة الخدمات المتكالمة
              <span className="text-danger"> *صور فقط</span>
            </label>
            <input
              onChange={handleChange}
              name="nameHealth"
              id="nameHealth"
              className="form-control"
              accept="image/*"
              type="file"
            ></input>
          </div>
        </>
      );
    }
    return selectHealth;
  };
  // Display Input Religion
  const displayReligion = () => {
    let selectReligion;
    if (religion === "another") {
      selectReligion = (
        <>
          <div className="form-control border-0">
            <label htmlFor="nameReligion">ادخل اسم الديانة</label>
            <input
              onChange={handleChange}
              name="nameReligion"
              id="nameReligion"
              className="form-control"
              type="text"
            ></input>
          </div>
        </>
      );
    }
    return selectReligion;
  };
  // Handle Input experience
  const handleExperience = (e) => {
    setExperience(e.target.value);
  };
  // Display Input experience
  const displayExperience = () => {
    let exp;
    if (experience === "experience") {
      exp = (
        <>
          <div className="form-control border-0">
            <label htmlFor="areaExpertise">ما هو مجال خبرتك؟</label>
            <input
              onChange={handleChange}
              name="areaExpertise"
              id="areaExpertise"
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="form-control border-0">
            <label htmlFor="howLongExpertise">ما هو وقت هذه الخبره</label>
            <input
              onChange={handleChange}
              name="howLongExpertise"
              id="howLongExpertise"
              className="form-control"
              type="text"
            ></input>
          </div>
        </>
      );
    }
    return exp;
  };
  // handleType
  const handleType = (e) => {
    setType(e.target.value);
    // handleChange();
  };
  // handleType
  const displayInput = () => {
    let displayIn;
    if (type === "female") {
      displayIn = (
        <div className="form-control border-0">
          <label htmlFor="maritalStatus">الحالة الاجتماعية</label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            onChange={handleChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="chooseYourStatus">الحاله الاجتماعية</option>
            <option value="Single">عزباء</option>
            <option value="married">متزوجه</option>
            <option value="widow">ارمله</option>
            <option value="SheSupport">تعول</option>
          </select>
        </div>
      );
    } else if (type === "male") {
      displayIn = (
        <>
          <div className="form-control border-0">
            <label htmlFor="maritalStatus">الحالة الاجتماعية</label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              onChange={handleChange}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="chooseYourStatus">الحاله الاجتماعية</option>
              <option value="Single">اعزب</option>
              <option value="married">متزوج</option>
              <option value="Widower">ارمل</option>
              <option value="HeSupport">يعول</option>
            </select>
          </div>
        </>
      );
    }
    return displayIn;
  };
  const RegisterFetchUserData = async (useData) => {
    try {
      const { data } = await axios.post("http://localhost:5180/users", useData);
      console.log(data);
      localStorage.setItem("UserToken", JSON.stringify(data.email));
      toast.success("Successfully Data!");
      navigate("/");
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterFetchUserData(userData);
  };
  const handleChange = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.name] = e.target.value;
    setUserData({ ...newUserData });
  };
  return (
    <Fragment>
      <div className="login">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control border-0">
              <div className="hederData d-flex justify-content-between ">
                <h5>البيانات الشخصية</h5>
                <button className="lang">En</button>
              </div>
              <label htmlFor="nameArabic">الاسم باللغه العربية</label>
              <input
                onChange={handleChange}
                name="nameArabic"
                id="nameArabic"
                placeholder="ادخل الاسم"
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="nameEnglish">الاسم باللغه الانجليزية</label>
              <input
                onChange={handleChange}
                id="nameEnglish"
                name="nameEnglish"
                placeholder="ادخل الاسم"
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="date">تاريخ ميلادك</label>
              <input
                onChange={handleChange}
                name="date"
                id="date"
                className="form-control"
                type="date"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="type">النوع</label>
              <select
                id="type"
                name="type"
                onChange={(e) => {
                  handleChange(e);
                  handleType(e);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="selectType"> يرجى تحديد النوع</option>
                <option value="male">ذكر</option>
                <option value="female">انثي</option>
                <option value="noOne">أفضل عدم ذكر ذلك</option>
              </select>
            </div>
            {displayInput()}
            {/*  ******************************* Other *************************************/}
            <div className="form-control border-0">
              <label htmlFor="religion">الديانة</label>
              <select
                id="religion"
                name="religion"
                onChange={(e) => {
                  handleChange(e);
                  handleReligion(e);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="ChooseTheReligion">اختر نوع الديانه</option>
                <option value="muslim">مسلم</option>
                <option value="christian">مسيحي</option>
                <option value="jewish">اليهودية</option>
                <option value="another">أخري</option>
              </select>
            </div>
            {displayReligion()}
            {/* //////////////////////////////////--selectNationality--///////////////////////////////////////////////// */}

            <div className="form-control border-0">
              <label htmlFor="nationality" className="mb-1">
                الجنسيه
              </label>
              <ReactFlagsSelect
                onChange={handleChange}
                name="nationality"
                selected={selected}
                onSelect={(code) => setSelected(code)}
                placeholder="اختر جنسيتك "
                searchable
                searchPlaceholder="ابحث عن بلدك"
                className="menu-flags"
              />
            </div>
            {disblayNationality()}
            {displayHealth()}
            {/* //////////////////////////////////--selectNationality--///////////////////////////////////////////////// */}
            {displayEntryVisa()}
            <div className="form-control border-0">
              <label htmlFor="photoPersonal">صوره شخصية</label>
              <input
                onChange={handleChange}
                name="photoPersonal"
                id="photoPersonal"
                className="form-control"
                accept="image/*"
                type="file"
              ></input>
            </div>
            <SelectCountry />
            {/* ***************************************************************************************************************** */}
            <div className="form-control border-0">
              <div className="hederData ">
                <h5>العنوان الحالي</h5>
              </div>
              <label htmlFor="newCountry">الدولة</label>
              <input
                onChange={handleChange}
                name="newCountry"
                id="newCountry"
                className="form-control"
                placeholder="ادخل العنوان الحالي"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="newState">المحافظة</label>
              <input
                onChange={handleChange}
                name="newState"
                id="newState"
                className="form-control"
                placeholder="ادخل المحافظة"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="newAddress">العنوان</label>
              <input
                onChange={handleChange}
                name="newAddress"
                id="newAddress"
                className="form-control"
                placeholder="ادخل العنوان"
                type="text"
              ></input>
            </div>
            {/* Address Google Map */}
            <div className="form-control border-0">
              <label htmlFor="addressGoogle">لينك العنوان من جوجل</label>
              <input
                onChange={handleChange}
                name="addressGoogle"
                id="addressGoogle"
                className="form-control"
                placeholder="ادخل لينك العنوان"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <div className="hederData ">
                <h5>التواصل</h5>
              </div>
              <label htmlFor="phoneNumber">رقم الهاتف</label>
              <input
                onChange={handleChange}
                name="phoneNumber"
                id="phoneNumber"
                className="form-control"
                placeholder="رقم الهاتف"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="homeNumber">الخط الارضي</label>
              <input
                onChange={handleChange}
                name="homeNumber"
                id="homeNumber"
                className="form-control"
                placeholder=" رقم الهاتف الارضي"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="email">الايميل</label>
              <input
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="الايميل"
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="password">الباسورد</label>
              <input
                onChange={handleChange}
                name="password"
                id="password"
                placeholder="الباسورد"
                className="form-control"
                type="password"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="social">منصات التواصل الاجتماعي</label>
              <select
                id="social"
                name="social"
                onChange={handleSocial}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="selectTheSocial">اختر نوع المنصة</option>
                <option value="facebook">فيسبوك</option>
                <option value="linkedIn">لينكدان</option>
                <option value="behance">بيهانس</option>
                <option value="instagram">انستجرام</option>
              </select>
            </div>
            {displaySocial()}
            {/* --------------------------------------------------------------------------------------------------------- */}
            <div className="form-control border-0">
              <div className="hederData ">
                <h5>اللغات</h5>
              </div>
              <label htmlFor="mainLanguage">اللغه الاساسية</label>
              <input
                onChange={handleChange}
                name="mainLanguage"
                id="mainLanguage"
                className="form-control"
                placeholder="اللغه الاساسيه"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="secondLanguage">اللغة الثانية</label>
              <input
                onChange={handleChange}
                name="secondLanguage"
                placeholder="اللغه الثانيه "
                id="secondLanguage"
                className="form-control"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <div className="hederData ">
                <h5>المهارات</h5>
              </div>
              <label htmlFor="oneSkill">المهارة الاولي</label>
              <input
                onChange={handleChange}
                name="oneSkill"
                id="oneSkill"
                className="form-control"
                type="text"
                placeholder="ادخل اسم المهاره"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="durationSkill">مده المهارة الاولي</label>
              <select
                id="durationSkill"
                name="durationSkill"
                onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0-5m">0-5 شهور</option>
                <option value="5-9m">5-9 شهور</option>
                <option value="0-1y">0-1 سنين</option>
                <option value="1-2y">1-2 سنين</option>
                <option value="2-3y">2-3 سنين</option>
              </select>
            </div>
            <div className="form-control border-0">
              <label htmlFor="secSkill">المهارة الثانية</label>
              <input
                onChange={handleChange}
                name="secSkill"
                id="secSkill"
                className="form-control"
                placeholder="ادخل اسم المهاره"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="durationSkillTwo">مده المهارة الثانية</label>
              <select
                id="durationSkillTwo"
                name="durationSkillTwo"
                onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0-5m">0-5 شهور</option>
                <option value="5-9m">5-9 شهور</option>
                <option value="0-1y">0-1 سنين</option>
                <option value="1-2y">1-2 سنين</option>
                <option value="2-3y">2-3 سنين</option>
              </select>
            </div>
            <div className="form-control border-0">
              <label htmlFor="thirdSkill">المهارة الثالثة</label>
              <input
                onChange={handleChange}
                name="thirdSkill"
                id="thirdSkill"
                className="form-control"
                placeholder="ادخل اسم المهاره"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="durationSkillthird">مده المهارة الثالثة</label>
              <select
                id="durationSkillthird"
                name="durationSkillthird"
                onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="0-5m">0-5 شهور</option>
                <option value="5-9m">5-9 شهور</option>
                <option value="0-1y">0-1 سنين</option>
                <option value="1-2y">1-2 سنين</option>
                <option value="2-3y">2-3 سنين</option>
              </select>
            </div>
            <div className="form-control border-0">
              <div className="hederData ">
                <h5>الشهادات العلمية والتدريب</h5>
              </div>
              <label htmlFor="photoCertificates"> صور الشهادات العلمية</label>
              <input
                onChange={handleChange}
                name="photoCertificates"
                id="photoCertificates"
                className="form-control"
                accept="image/*"
                type="file"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="trainingNameOne">اسم التدريب الاول</label>
              <input
                onChange={handleChange}
                name="trainingNameOne"
                id="trainingNameOne"
                className="form-control"
                placeholder="ادخل اسم التدريب"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="trainingTimeOne">مده التدريب الاول</label>
              <input
                onChange={handleChange}
                name="trainingTimeOne"
                id="trainingTimeOne"
                className="form-control"
                placeholder="ادخل اسم مده التدريب"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="PhotosTrainingCertificateOne">
                صوره الشهاده الخاصه بالتدريب الاول
              </label>
              <input
                onChange={handleChange}
                name="PhotosTrainingCertificateOne"
                id="PhotosTrainingCertificateOne"
                className="form-control"
                accept="image/*"
                type="file"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="trainingNameSec">اسم التدريب الثاني</label>
              <input
                onChange={handleChange}
                name="trainingNameSec"
                id="trainingNameSec"
                className="form-control"
                placeholder="ادخل اسم التدريب"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="trainingTimeSec">مده التدريب الثاني</label>
              <input
                onChange={handleChange}
                name="trainingTimeSec"
                id="trainingTimeSec"
                className="form-control"
                placeholder="ادخل اسم مده التدريب"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="PhotosTrainingCertificateSec">
                صوره الشهاده الخاصه بالتدريب الثاني
              </label>
              <input
                onChange={handleChange}
                name="PhotosTrainingCertificateSec"
                id="PhotosTrainingCertificateSec"
                className="form-control"
                accept="image/*"
                type="file"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="trainingNameThird">اسم التدريب الثالث</label>
              <input
                onChange={handleChange}
                name="trainingNameThird"
                id="trainingNameThird"
                className="form-control"
                placeholder="ادخل اسم التدريب"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="trainingTimeThird">مده التدريب الثالث</label>
              <input
                onChange={handleChange}
                name="trainingTimeThird"
                id="trainingTimeThird"
                className="form-control"
                placeholder="ادخل اسم التدريب"
                type="text"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="PhotosTrainingCertificateThird">
                صوره الشهاده الخاصه بالتدريب الثالث
              </label>
              <input
                onChange={handleChange}
                name="PhotosTrainingCertificateThird"
                id="PhotosTrainingCertificateThird"
                className="form-control"
                accept="image/*"
                type="file"
              ></input>
            </div>
            <div className="form-control border-0">
              <label htmlFor="experience">الخبره</label>
              <select
                id="experience"
                name="experience"
                onChange={(e) => {
                  handleChange(e);
                  handleExperience(e);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="selectExperience">هل لديك اي خبره?</option>
                <option value="experience">نعم لدي خبره</option>
                <option value="notExperience">لا يوجد لدي خبره</option>
              </select>
            </div>
            {displayExperience()}
            <button type="submit" className="submit-btn btn btn-dark">
              اكمل البيانات
            </button>
            <Link to={"/"}>لديك حساب بالفعل! </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
