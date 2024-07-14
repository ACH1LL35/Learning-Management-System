
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../user/user.entity';
import { Course } from '../course/course.entity';

@Entity("student")
export class studentProfile {

@PrimaryGeneratedColumn()
StudentID:number;

//foreign 
@OneToOne(() => User, user => user.UserID)
user: User;

@Column()
Fname :string;
@Column()
Lname :string;
@Column()
DOB :number;
@Column()
Email :string;
@Column()
Mobile :number;
@Column()
Gender  :string;
@Column()
Address :string;
@Column({ default: () => 'CURRENT_TIMESTAMP' })
RegistrationDate:Date;

}

@Entity("courseEnrollments")
export class CourseEnrollments {

@PrimaryGeneratedColumn()
EnrollmentID:number;


//foreign
@OneToOne(() => User, user => user.UserID)
UserID: User;



//foreign
@OneToOne(() => Course, course => course.CourseID)
CourseID: Course;


@Column({ default: () => 'CURRENT_TIMESTAMP' })
EnrollmentDate:Date;

}

@Entity("wishlist")
export class Wishlist {

@PrimaryGeneratedColumn()
WishlistID:number;

//foreign
@OneToOne(() => User, user => user.UserID)
user: User;


//foreign
@OneToOne(() => Course, course => course.CourseID)
course: Course;

@Column({ default: () => 'CURRENT_TIMESTAMP' })
DateAdded :Date;

}

@Entity("payments")
export class Payments{

@PrimaryGeneratedColumn()
PaymentID:number;


//foreign
@OneToOne(() => User, user => user.UserID)
user: User;

@Column()
Amount :number;

@Column({ default: () => 'CURRENT_TIMESTAMP' })
PaymentDate :Date;

@Column()
PaymentType :string;

}



@Entity("submissions ")
export class Submissions{

@PrimaryGeneratedColumn()
SubmissionID:number;


//foreign
@OneToOne(() => User, user => user.UserID)
user: User;

/*
@Column()
//foreign key 
EvaluationID :number;


@Column()
//foreign key 
EvaluationType:string;

*/
@Column({ default: () => 'CURRENT_TIMESTAMP' })
SubmissionDate :Date;

//file *****************
@Column()
SubmissionContent :string 

}

@Entity("achievements")
export class Achievements {

@PrimaryGeneratedColumn()
AchievementID:number;


//foreign
@OneToOne(() => User, user => user.UserID)
user: User;



@Column()
AchievementType:string;


@Column({ default: () => 'CURRENT_TIMESTAMP' })
AchievementDate:Date;


}

@Entity("comment")
export class Comment  {

@PrimaryGeneratedColumn()
CommentID:number;


//foreign
@OneToOne(() => User, user => user.UserID)
user: User;

/*
OneTomany 
@Column()
//foreign key 
PostID:number;
*/

@Column()
Comment:string;


@Column({ default: () => 'CURRENT_TIMESTAMP' })
CommentDate:Date;

}

