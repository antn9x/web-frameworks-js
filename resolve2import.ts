import { camelCase, upperFirst, capitalize } from "lodash"
import fs from 'fs'

const content = ` {
  name: "edit-answer-page",
  path: "/cau-hoi/tra-loi/:questionId/chinh-sua/:answerId",
  component: resolve(__dirname, "pages/question/edit-answer.vue")
},
{
  name: "danh-sach-tim-kiem-theo-lop",
  path: "/danh-sach-tim-kiem-:slug-l:clazzKey(\\d+)",
  component: resolve(__dirname, "pages/danh-sach-tim-kiem.vue")
},
{
  name: "answer-page",
  path: "/cau-hoi/tra-loi/:questionId",
  component: resolve(__dirname, "pages/question/answer.vue")
},
{
  name: "profile-user",
  path: "/thong-tin-ca-nhan/:id",
  component: resolve(__dirname, "pages/profile/index.vue"),
  meta: { breadCrumb: "Trang cá nhân", title: "Tài khoản" },
},
{
  name: "mission-user",
  path: "/bang-nhiem-vu",
  component: resolve(__dirname, "pages/mission/index.vue"),
  meta: { breadCrumb: "Bảng nhiệm vụ", title: "Tài khoản" },
},
{
  name: "level-user",
  path: "/thu-hang-level/:id",
  component: resolve(__dirname, "pages/level/index.vue"),
  meta: { breadCrumb: "Thứ hạng level", title: "Tài khoản" },
},
{
  name: "edit-profile",
  path: "/thong-tin-ca-nhan/:id/edit",
  component: resolve(__dirname, "pages/profile/edit.vue"),
  meta: { breadCrumb: "Chỉnh sửa thông tin", title: "Tài khoản" },
},
{
  name: "SGK",
  path: "/giai-bai-tap-sgk.html",
  component: resolve(__dirname, "pages/textbook/index.vue"),
},
{
  name: "danh-sach-tim-kiem-sgk",
  path: "/giai-bai-tap-sgk/danh-sach-tim-kiem",
  component: resolve(__dirname, "pages/textbook/danh-sach-tim-kiem.vue"),
},
{
  name: "service-unavailable",
  path: "/giai-bai-tap-sgk/loi-he-thong",
  component: resolve(__dirname, "pages/textbook/service-unavailable.vue"),
},
{
  name: "change-password",
  path: "/doi-mat-khau.html",
  component: resolve(__dirname, "pages/doi-mat-khau.html.vue"),
},
{
  name: "history-point",
  path: "/thong-ke-lich-su-diem",
  component: resolve(__dirname, "pages/point-history/index.vue"),
  meta: {subBreadCrumb: "Thống kê lịch sử điểm", breadCrumb: "Trang cá nhân", title: "Tài khoản" },
},
//sgk lop
{
  name: "Grade",
  path: "/giai-bai-tap-sgk/:slug.html",
  component: resolve(__dirname, "pages/textbook/grade.vue"),
},
// SGK Detail
{
  name: "Category",
  path: "/giai-bai-tap-sgk/danh-muc/:slug.html",
  component: resolve(__dirname, "pages/textbook/category.vue"),
},
{
  name: "handle-redirect-null-page",
  path: "/giai-bai-tap-sgk/null/:slug.html",
  component: resolve(__dirname, "pages/textbook/handle-redirect-page.vue"),
},
{
  name: "ListChapterPage",
  path: "/giai-bai-tap-sgk/bo-sach/:slug.html",
  component: resolve(__dirname, "pages/textbook/list-chapter-page.vue"),
},
{
  name: "ListPracticeInChapter",
  path: "/giai-bai-tap-sgk/chuong/:slug.html",
  component: resolve(__dirname, "pages/textbook/list-practice.vue"),
},
{
  name: "ListSectionInPractice",
  path: "/giai-bai-tap-sgk/bai-tap/:slug/:page.html",
  component: resolve(__dirname, "pages/textbook/list-section.vue"),
},
{
  name: "AnswerPage",
  path: "/giai-bai-tap-sgk/noi-dung-bai-tap/:slug.html",
  component: resolve(__dirname, "pages/textbook/answer-page.vue"),
},
{
  name: "hoi-dap-theo-mon-lop",
  path: "/hoi-dap/mon-lop-:slug-m:subjectKey-l:clazzKey.html",
  component: resolve(__dirname, "pages/index.vue")
},
{
  name: "hoi-dap-mon-hoc",
  path: "/hoi-dap/:slug-m:subjectKey.html",
  component: resolve(__dirname, "pages/index.vue")
},
{
  name: "hoi-dap-theo-lop",
  path: "/hoi-dap/:slug-l:clazzKey.html",
  component: resolve(__dirname, "pages/index.vue")
},
{
  name: "chi-tiet-cau-hoi",
  path: "/cau-hoi/:id",
  component: resolve(__dirname, "pages/question/detail.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Chi tiết câu hỏi" },
},

//cam-nang
{
  name: "cn",
  path: "/cam-nang",
  component: resolve(__dirname, "pages/cam-nang/index.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang" },
},
{
  name: "cam-nang-tag-detail",
  path: "/cam-nang-tag/:tag",
  component: resolve(__dirname, "pages/cam-nang/cam-nang-tag.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang tag" },
},
{
  name: "cam-nang-author-detail",
  path: "/cam-nang-tac-gia/:author",
  component: resolve(__dirname, "pages/cam-nang/cam-nang-tac-gia.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang tác giải" },
},
{
  name: "cam-nang-chi-tiet-bai-viet",
  path: "/cam-nang/:slug.html",
  component: resolve(__dirname, "pages/cam-nang/bai-viet-chi-tiet.vue"),
  meta: { breadCrumb: "Trang chủ bài viết", title: "Cẩm nang chi tiết bài viết" },
},
{
  name: "cam-nang-menu-mon-lop",
  path: "/cam-nang/:slug-mh:subjectKey-cl:clazzKey",
  component: resolve(__dirname, "pages/cam-nang/category.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang" },
},
{
  name: "cam-nang-menu-mon",
  path: "/cam-nang/:slug-mh:subjectKey",
  component: resolve(__dirname, "pages/cam-nang/category.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang" },
},
{
  name: "cam-nang-menu-lop",
  path: "/cam-nang/:slug-cl:clazzKey",
  component: resolve(__dirname, "pages/cam-nang/category.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang" },
},
{
  name: "cam-nang-menu",
  path: "/cam-nang/:slug",
  component: resolve(__dirname, "pages/cam-nang/category.vue"),
  meta: { breadCrumb: "Trang chủ", title: "Cẩm nang" },
},
{
  name: "qua-tang",
  path: "/qua-tang/:id",
  component: resolve(__dirname, "pages/gift-exchange/index.vue"),
},
{
  name: 'chi-tiet-de-thi',
  path: '/de-on-luyen/:slug-:examId(\\d+)',
  component: resolve(__dirname, "pages/de-on-luyen/detail-exam.vue")
},
{
  name: 'have-filter',
  path: '/de-on-luyen/:slug-:listId(\\w+)',
  component: resolve(__dirname, "pages/de-on-luyen/index.vue")
},
{
  name: 'de-thi-cung-tag',
  path: '/de-on-luyen-tag/:slug',
  component: resolve(__dirname, "pages/de-on-luyen/same-tag.vue")
},
{
  name: 'tim-kiem-de-on-luyen',
  path: '/de-on-luyen/tim-kiem',
  component: resolve(__dirname, "pages/de-on-luyen/tim-kiem.vue")
},`

let importLines ='';

const matches = content.replace(/resolve\(__dirname, "pages\/(.*).vue"\)/g, (substr, p1) => {
  // console.log(substr, p1)
  importLines+= `const ${upperFirst(camelCase(p1))} = () => import("./pages/${p1}.vue");\n`
  return upperFirst(camelCase(p1))
  // return `() => import ("./pages/${p1}.vue")`
})

// console.log(matches)
fs.writeFileSync('output/nuxt.config', importLines+matches)
