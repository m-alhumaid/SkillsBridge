var get_id;
function shoemsg(id) {
    get_id = id;
    $('#del').modal('show')
    
}
function confirm_delet() {
    $.ajax(
        {
            url: 'DeleteCourse',
            type: "get",
            data: { id: get_id },

            success: function (result) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "  تم الحذف بنجاح "
                });

                $("#courses-container").html(result)

            }

        }
    );

}

//تحديث الحالة
function shoemsg1(id) {
    get_id = id;
    $('#edit').modal('show')

}
function confirmedit() {
    $.ajax(
        {
            url: 'EditCourseStatus',
            type: "get",
            data: { id: get_id },

            success: function (result) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });

                Toast.fire({
                    icon: "success",
                    title: "  تم التعديل بنجاح "
                });

            }

        }
    );
}

function SearchCourse(Name) {

    $.ajax(
        {
            url: 'SearchCourse',
            type: "POST",
            data: { Name: Name },

            success: function (result) {
                $("#coursesSearch-container").html(result)
            }

        }
    );
}
// function Course(Name) {

//     $.ajax(
//         {
//             url: 'Course',
//             type: "POST",
//             data: { Name: Name },

//             success: function (result) {
//                 $("#coursesSearch2-container").html(result)
//             }

//         }
//     );
// }
// function ChangePassword() {
//     $.ajax(
//         {
//             url: 'ChangePassword',
//             type: "POST",
//             data: { id: get_id },

//             success: function (result) {
//                 const Toast = Swal.mixin({
//                     toast: true,
//                     position: "top-end",
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                         toast.onmouseenter = Swal.stopTimer;
//                         toast.onmouseleave = Swal.resumeTimer;
//                     }
//                 });

//                 Toast.fire({
//                     icon: "success",
//                     title: "  تم التعديل بنجاح "
//                 });

//                 $("#password-container").html(result)
//             }

//         }
//     );
// }

//function shoemsgbooking(id) {
//    get_id = id;
//    $('#booking').modal('show');
//}

//function booking() {
//    $.ajax({
//        url: '/Booking/BookCourse', // رابط الإجراء في الخادم
//        type: "post",
//        data: { courseId: get_id },

//        success: function (response) {
//            if (response.success) {
//                Swal.fire({
//                    icon: "success",
//                    title: "تم التسجيل بنجاح",
//                    text: response.message
//                });
//            } else {
//                Swal.fire({
//                    icon: "warning",
//                    title: "تنبيه",
//                    text: response.message
//                });
//            }
//        },

//        error: function () {
//            Swal.fire({
//                icon: "error",
//                title: "Oops...",
//                text: "Something went wrong!",
//                footer: '<a href="#">Why do I have this issue?</a>'
//            });
//        }
//    });
//}




