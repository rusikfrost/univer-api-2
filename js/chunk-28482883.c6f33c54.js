(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28482883"],{"3a66":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("fe6c"),n=a("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,a=e.length;t<a;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3b61":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"scrollbar",attrs:{app:"",clipped:"",width:"340"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Сведения об образовательной организации")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:""}},t._l(t.menuLinks,(function(e,i){return a("div",{key:i},[e.hasSubmenu?a("v-list-group",{attrs:{"prepend-icon":"mdi-"+e.icon,value:!1},scopedSlots:t._u([{key:"activator",fn:function(){return[t._v(" "+t._s(e.title)+" ")]},proxy:!0}],null,!0)},t._l(e.submenu,(function(e,i){return a("div",{key:i},[e.submenu?a("v-list-group",{attrs:{value:!1,"sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])]},proxy:!0}],null,!0)},t._l(e.submenu,(function(e,i){return a("div",{key:i},[e.submenu?a("v-list-group",{attrs:{value:!1,"sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])]},proxy:!0}],null,!0)},t._l(e.submenu,(function(e,i){return a("v-list-item",{key:i,attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params},query:{chair:e.path.chair,uid:e.path.uid}}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):a("v-list-item",{attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params}}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),0):a("v-list-item",{attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params}}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),0):a("v-list-item",{attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params}}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),0),a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Дополнительные сведения")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:""}},t._l(t.MenuLinksAddition,(function(e,i){return a("div",{key:i},[e.hasSubmenu?a("v-list-group",{attrs:{"prepend-icon":"mdi-"+e.icon,value:!1},scopedSlots:t._u([{key:"activator",fn:function(){return[t._v(" "+t._s(e.title)+" ")]},proxy:!0}],null,!0)},t._l(e.submenu,(function(e,i){return a("div",{key:i},[e.submenu?a("v-list-group",{attrs:{value:!1,"sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])]},proxy:!0}],null,!0)},t._l(e.submenu,(function(e,i){return a("div",{key:i},[e.submenu?a("v-list-group",{attrs:{value:!1,"sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",[t._v(" "+t._s(e.title)+" ")])]},proxy:!0}],null,!0)},t._l(e.submenu,(function(e,i){return a("v-list-item",{key:i,attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params},query:{chair:e.path.chair,uid:e.path.uid}}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):a("v-list-item",{attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params}}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),0):a("v-list-item",{attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params}}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),0):a("v-list-item",{attrs:{link:"",to:{name:e.path.name,params:{route:e.path.params}}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),0)],1)},n=[],s=[{title:"Структура и органы управления",icon:"account-group-outline",hasSubmenu:!0,submenu:[{title:"Ученый совет",path:{name:"sveden",params:"academic-council"},hasSubmenu:!1},{title:"Факультет инфокоммуникаций",path:{name:"sveden",params:"faculty-infocommunication"},hasSubmenu:!1},{title:"Кафедра инфокоммуникационных технологий и систем связи",path:{name:"sveden",params:"faculty-itss"},hasSubmenu:!1},{title:"Кафедра информатики и вычислительной техники",path:{name:"sveden",params:"faculty-ivt"},hasSubmenu:!1},{title:"Кафедра общенаучной подготовки",path:{name:"sveden",params:"faculty-general"},hasSubmenu:!1}]},{title:"Документы",path:{name:"sveden",params:"docs"},icon:"book-open-page-variant",hasSubmenu:!1},{title:"Образовательные стандарты",path:{name:"sveden",params:"standarts"},icon:"book-variant-multiple",hasSubmenu:!1},{title:"Руководство. Научно-педагогический состав",icon:"account-tie-outline",hasSubmenu:!0,submenu:[{title:"Руководство",path:{name:"sveden",params:"rulers"},hasSubmenu:!1},{title:"Научно-педагогический состав",hasSubmenu:!0,submenu:[{title:"Коллективы кафедры инфокоммуникационных технологий и систем связи",hasSubmenu:!0,submenu:[{title:"Болдырихин Николай Вячеславович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"Qm9sZGlyaWhpbiBOaWtvbGFpIFZ5YWNoZXNsYXZvdmljaA=="}},{title:"Борисов Борис Петрович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"Qm9yaXNvdiBCb3JpcyBQZXRyb3ZpY2g="}},{title:"Боярчук Андрей Эдуардович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"Qm95YXJjaHVrIGFuZHJlaSBFZHVhcmRvdmljaA=="}},{title:"Герасимов Игорь Николаевич",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"R2VyYXNpbW92IElnb3InIE5pa29sYWV2aWNo"}},{title:"Елисеев Александр Вячеславович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"RWxpc2VldiBhbGVrc2FuZHIgVnlhY2hlc2xhdm92aWNo"}},{title:"Енгибарян Ирина Алешаевна",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"RW5naWJhcnlhbiBJcmluYSBhbGVzaGFldm5h"}},{title:"Ершов Валерий Васильевич",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"RXJzaG92IFZhbGVyaWkgVmFzaWwnZXZpY2g="}},{title:"Жуковский Александр Георгиевич",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"Wkh1a292c2tpaSBhbGVrc2FuZHIgR2VvcmdpZXZpY2g="}},{title:"Лабунько Олег Степанович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"TGFidW4na28gT2xlZyBTdGVwYW5vdmljaA=="}},{title:"Манин Александр Анатольевич",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"TWFuaW4gYWxla3NhbmRyIGFuYXRvbCdldmljaA=="}},{title:"Нерсесянц Альфред Аванесович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"TmVyc2VzeWFudHMgYWwnZnJlZCBhdmFuZXNvdmljaA=="}},{title:"Панков Геннадий Климович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"UGFua292IEdlbm5hZGlpIEtsaW1vdmljaA=="}},{title:"Решетникова Ирина Витальевна",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"UmVzaGV0bmlrb3ZhIElyaW5hIFZpdGFsJ2V2bmE="}},{title:"Рыбалко Игорь Петрович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"UmliYWxrbyBJZ29yJyBQZXRyb3ZpY2g="}},{title:"Сосновский Иван Александрович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"U29zbm92c2tpaSBJdmFuIGFsZWtzYW5kcm92aWNo"}},{title:"Юхнов Василий Иванович",path:{name:"sveden",params:"lecturers",chair:"itss",uid:"WVVobm92IFZhc2lsaWkgSXZhbm92aWNo"}}]},{title:"Коллективы кафедры информатики и вычислительной техники",hasSubmenu:!0,submenu:[{title:"Конева Светлана Ивановна",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"S29uZXZhIFN2ZXRsYW5hIEl2YW5vdm5h"}},{title:"Лобзенко Павел Владимирович",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"TG9iemVua28gUGF2ZWwgVmxhZGltaXJvdmljaA=="}},{title:"Погорелов Вадим Алексеевич",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"UG9nb3JlbG92IFZhZGltIGFsZWtzZWV2aWNo"}},{title:"Полянский Сергей Алексеевич",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"UG9seWFuc2tpaSBTZXJnZWkgYWxla3NlZXZpY2g="}},{title:"Соколов Сергей Викторович",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"U29rb2xvdiBTZXJnZWkgVmlrdG9yb3ZpY2g="}},{title:"Ткачук Евгений Остапович",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"VGthY2h1ayBFdmdlbmlpIE9zdGFwb3ZpY2g="}},{title:"Чикалов Андрей Николаевич",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"Q0hpa2Fsb3YgYW5kcmVpIE5pa29sYWV2aWNo"}},{title:"Швидченко Светлана Александровна",path:{name:"sveden",params:"lecturers",chair:"ivt",uid:"U0h2aWRjaGVua28gU3ZldGxhbmEgYWxla3NhbmRyb3ZuYQ=="}}]},{title:"Коллектив кафедры общенаучной подготовки",hasSubmenu:!0,submenu:[{title:"Бинеев Энвер Абдулхакович",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"QmluZWV2IEVudmVyIGFiZHVsaGFrb3ZpY2g="}},{title:"Бородин Алексей Викторович",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"Qm9yb2RpbiBhbGVrc2VpIFZpa3Rvcm92aWNo"}},{title:"Гаевская Любовь Александровна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"R2FldnNrYXlhIEx5dWJvdicgYWxla3NhbmRyb3ZuYQ=="}},{title:"Головина Ирина Витальевна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"R29sb3ZpbmEgSXJpbmEgVml0YWwnZXZuYQ=="}},{title:"Докучаев Сергей Аркадьевич",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"RG9rdWNoYWV2IFNlcmdlaSBhcmthZCdldmljaA=="}},{title:"Ефимов Сергей Викторович",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"RWZpbW92IFNlcmdlaSBWaWt0b3JvdmljaA=="}},{title:"Жуковский Денис Александрович",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"Wkh1a292c2tpaSBEZW5pcyBhbGVrc2FuZHJvdmljaA=="}},{title:"Колдынская Лариса Михайловна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"S29sZGluc2theWEgTGFyaXNhIE1paGFpbG92bmE="}},{title:"Конкин Борис Борисович",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"S29ua2luIEJvcmlzIEJvcmlzb3ZpY2g="}},{title:"Константинова Яна Борисовна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"S29uc3RhbnRpbm92YSBZYW5hIEJvcmlzb3ZuYQ=="}},{title:"Коршун Анна Михайловна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"S29yc2h1biBhbm5hIE1paGFpbG92bmE="}},{title:"Костецкая Галина Сергеевна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"S29zdGV0c2theWEgR2FsaW5hIFNlcmdlZXZuYQ=="}},{title:"Светличная Наталия Олеговна",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"U3ZldGxpY2huYXlhIE5hdGFsaXlhIE9sZWdvdm5h"}},{title:"Устименко Дмитрий Леонидович",path:{name:"sveden",params:"lecturers",chair:"gse",uid:"VXN0aW1lbmtvIERtaXRyaWkgTGVvbmlkb3ZpY2g="}}]},{title:"Коллектив отдела научно-исследовательской работы",hasSubmenu:!0,submenu:[{title:"Головской Василий Андреевич",path:{name:"sveden",params:"lecturers",chair:"dsr",uid:"R29sb3Zza29pIFZhc2lsaWkgYW5kcmVldmljaA=="}},{title:"Мозоль Александр Анатольевич",path:{name:"sveden",params:"lecturers",chair:"dsr",uid:"TW96b2wnIGFsZWtzYW5kciBhbmF0b2wnZXZpY2g="}},{title:"Рыбалко Игорь Петрович",path:{name:"sveden",params:"lecturers",chair:"dsr",uid:"UmliYWxrbyBJZ29yJyBQZXRyb3ZpY2g="}}]}]}]},{title:"Материально-техническое обеспечение и оснащенность образовательного процесса",icon:"cog-outline",hasSubmenu:!0,submenu:[{title:"Учебные кабинеты",path:{name:"sveden",params:"rooms"},hasSubmenu:!1},{title:"Объекты для проведения практических занятий",hasSubmenu:!0,submenu:[{title:"Лаборатория Общей физики и БЖД",path:{name:"sveden",params:"lab-general-phisics-n-bjd"},hasSubmenu:!1},{title:"Лаборатория Вычислительной техники и информатики",path:{name:"sveden",params:"lab-ivt"},hasSubmenu:!1},{title:"Лаборатория Основ теории цепей и линий связи",path:{name:"sveden",params:"lab-line"},hasSubmenu:!1},{title:"Лаборатория Теории электрической связи, метрологии и электроники",path:{name:"sveden",params:"lab-electricity"},hasSubmenu:!1},{title:"Лаборатория Систем радиосвязи и телевещания",path:{name:"sveden",params:"lab-radio"},hasSubmenu:!1},{title:"Лаборатория Цифровых систем коммутации и сетей связи",path:{name:"sveden",params:"lab-css"},hasSubmenu:!1},{title:"Лаборатория Передачи дискретных сообщений и документальной электросвязи",path:{name:"sveden",params:"lab-relation"},hasSubmenu:!1},{title:"Лаборатория Многоканальных телекоммуникационных систем",path:{name:"sveden",params:"lab-mts"},hasSubmenu:!1},{title:"Лаборатория Современных методов управления",path:{name:"sveden",params:"lab-rule"},hasSubmenu:!1}]},{title:"Сектор библиотечного обслуживания",path:{name:"sveden",params:"library"},hasSubmenu:!1}]},{title:"Приемная комиссия",path:{name:"sveden",params:"join-commission"},icon:"account-group-outline",hasSubmenu:!1},{title:"Стипендии и иные виды материальной помощи",path:{name:"sveden",params:"grants"},icon:"account-cash-outline",hasSubmenu:!1},{title:"Платные образовательные услуги",icon:"cart-outline",hasSubmenu:!0,submenu:[{title:"Основная образовательная деятельность",path:{name:"sveden",params:"main-activity-paid"},hasSubmenu:!1},{title:"Дополнительная образовательная деятельность",hasSubmenu:!0,submenu:[{title:"Информация обновляется.....",path:{name:"404",params:""},hasSubmenu:!1}]}]},{title:"Финансово-хозяйственная деятельность",path:{name:"sveden",params:"cash-activity"},icon:"cash-multiple",hasSubmenu:!1},{title:"Вакантные места для приема (перевода)",path:{name:"404",params:""},icon:"arrow-decision-outline",hasSubmenu:!1},{title:"Доступная среда",path:{name:"404",params:""},icon:"share",hasSubmenu:!1},{title:"Международное сотрудничество",path:{name:"404",params:""},icon:"earth",hasSubmenu:!1}],r=[{title:"Учебная работа",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"Нормы учебного времени на 2020/2021",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Расписание занятий",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Электронная информационно-образовательная среда",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"Методические материалы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Внешние электронные информационные ресурсы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Библиотека СКФ МТУСИ",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"План выпуска учебных, научных и методических изданий СКФ МТУСИ",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Титульные листы для оформления контрольных работ, курсовых работ и проектов",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Научная работа",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"Цели и основные направления",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Основные руководящие документы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Организация, планирование и руководство научной работой",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Международная научно-техническая конференция",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Результаты научно-исследовательской деятельности",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Олимпиады",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Научно-технические сборы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Перечень инновационных разработок",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Перечень изданных статей профессорско-преподавательского состава СКФ МТУСИ в изданиях, рекомендуемых ВАК",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Перечень свидетельств о регистрации программ и патентов, полученных на разработки",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Ресурсы для осуществления научно-исследовательской деятельности",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Воспитательная и внеучебная работа",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"План и расписание работы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:'Студенческая газета "Спектр"',path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Деятельность студенческих организаций",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Объявление о вакансиях",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Абитуриенту",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"Правила приема",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Стоимость обучения",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Документы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Приемная комиссия",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Приемная комиссия",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Дни открытых дверей",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Очная форма обучения",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Заочная форма обучения",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Вопрос в приемную комиссию",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Подготовительные курсы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Студенту",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"График плановых консультаций преподавателей",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Работа",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Модульно-рейтинговая система",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Электронное портфолио студента",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"МУ по подготовке ВКР",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Противодействие коррупции",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"Нормативно-правовые и иные акты в сфере противодействия коррупции",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Антикоррупционная экспертиза",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Методические материалы",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Формы документов, связанных с противодействием коррупции, для заполнения",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Сведения о доходах, расходах, об имуществе и обязательствах имущественного характера",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Комиссия по соблюдению требований к служебному поведению и урегулироваанию конфликта интересов",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Обратная связь для сообщения о фактах коррупции",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Наши партнеры",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Клуб выпускников",path:{name:"sveden",params:""},icon:"",hasSubmenu:!0,submenu:[{title:"Члены клуба выпускников",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}]},{title:"Музей СКФ МТУСИ",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Виртуальный тур",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Видео",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Телефонный справочник",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Вакансии",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Архив",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1},{title:"Карта сайта",path:{name:"sveden",params:""},icon:"",hasSubmenu:!1}],u={name:"main-navigation-drawer",nameSecond:"main-navigation-drawer",data:function(){return{drawer:!1,menuLinks:s,MenuLinksAddition:r}},mounted:function(){var t=this;this.$bus.$on("change-drawer",(function(){return t.drawer=!t.drawer}))}},m=u,h=a("2877"),o=a("6544"),l=a.n(o),p=a("ce7e"),c=a("132d"),d=a("8860"),v=a("56b0"),b=a("da13"),g=a("5d23"),f=a("34c3"),S=(a("99af"),a("a9e3"),a("c7cd"),a("5530")),y=(a("7958"),a("adda")),W=a("3a66"),Z=a("a9ad"),w=a("b848"),k=a("e4cd"),_=a("e707"),V=a("d10f"),A=a("7560"),B=a("a293"),Y=a("dc22"),I=a("c3f0"),G=a("80d2"),R=a("58df"),F=Object(R["a"])(Object(W["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),Z["a"],w["a"],k["a"],_["a"],V["a"],A["a"]),x=F.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:B["a"],Resize:Y["a"],Touch:I["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(S["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&k["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",e={height:Object(G["g"])(this.height),top:this.isBottom?"auto":Object(G["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(G["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(G["g"])(this.computedTransform,"%"),")"),width:Object(G["g"])(this.computedWidth)};return e}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(y["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var a=document.createEvent("UIEvents");a.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(a)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(G["s"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(G["s"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),E=Object(h["a"])(m,i,n,!1,null,null,null);e["default"]=E.exports;l()(E,{VDivider:p["a"],VIcon:c["a"],VList:d["a"],VListGroup:v["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:f["a"],VListItemTitle:g["c"],VNavigationDrawer:x})},7958:function(t,e,a){},dc22:function(t,e,a){"use strict";function i(t,e){var a=e.value,i=e.options||{passive:!0};window.addEventListener("resize",a,i),t._onResize={callback:a,options:i},e.modifiers&&e.modifiers.quiet||a()}function n(t){if(t._onResize){var e=t._onResize,a=e.callback,i=e.options;window.removeEventListener("resize",a,i),delete t._onResize}}var s={inserted:i,unbind:n};e["a"]=s},e4cd:function(t,e,a){"use strict";a("caad"),a("b0c0"),a("a9e3");var i=a("d9bd"),n=a("2b0e");e["a"]=n["default"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,a=t.width,i=t.name,n=t.mobileBreakpoint;if(n===this.mobileBreakpoint)return e;var s=parseInt(this.mobileBreakpoint,10),r=!isNaN(s);return r?a<s:i===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(i["d"])("mobile-break-point","mobile-breakpoint",this)}})}}]);
//# sourceMappingURL=chunk-28482883.c6f33c54.js.map