"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const parent_module_1 = require("./parent/parent.module");
const admin_module_1 = require("./admin/admin.module");
const course_module_1 = require("./course/course.module");
const contentApproval_module_1 = require("./course/contentApproval/contentApproval.module");
const courseMaterials_module_1 = require("./course/courseMaterials/courseMaterials.module");
const user_module_1 = require("./user/user.module");
const report_module_1 = require("./admin/report/report.module");
const instructor_module_1 = require("./instructor/instructor.module");
const event_module_1 = require("./event/event.module");
const faq_module_1 = require("./faq/faq.module");
const student_module_1 = require("./student/student.module");
const consent_form_module_1 = require("./parent/ConsentForm/consent-form.module");
const evaluation_form_module_1 = require("./student/EvaluationForm/evaluation-form.module");
const child_management_module_1 = require("./parent/ChildManagement/child-management.module");
const discussion_module_1 = require("./parent/discussion/discussion.module");
const discussion_comment_module_1 = require("./parent/discussion-comment/discussion-comment.module");
const activity_module_1 = require("./parent/activity/activity.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            parent_module_1.ParentModule, admin_module_1.AdminModule, course_module_1.CourseModule, instructor_module_1.InstructorModule, activity_module_1.ActivityModule, discussion_module_1.DiscussionModule, user_module_1.UserModule,
            contentApproval_module_1.ContentApprovalModule, report_module_1.ReportingModule, event_module_1.EventModule, courseMaterials_module_1.CourseMaterialModule, discussion_comment_module_1.DiscussionCommentModule,
            faq_module_1.FAQModule, consent_form_module_1.ConsentFormModule, student_module_1.StudentModule, child_management_module_1.ChildManagementModule, evaluation_form_module_1.EvaluationFormModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'tiger',
                database: 'labtest',
                autoLoadEntities: true,
                synchronize: true,
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'zobayeralam1025@gmail.com',
                        pass: '',
                    },
                    tls: {}
                },
                defaults: {
                    from: '"No Reply" <no-reply@example.com>',
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map