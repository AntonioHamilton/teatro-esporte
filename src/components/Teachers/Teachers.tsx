import Image from "next/image";
import Link from "next/link";
import * as SC from "./Teachers.styled";
import { teachers } from "@/constants/teachers";

export const Teachers = () => {
	return (
		<SC.TeachersSection>
			<SC.SectionTitle>Conheça Nossos Professores</SC.SectionTitle>
			<SC.TeachersGrid>
				{teachers.map((teacher) => (
					<Link
						href={teacher.socialUrl}
						rel="noopener noreferrer"
						target="_blank"
						key={teacher.name}
					>
						<SC.TeacherCard>
							<SC.ImageWrapper>
								<Image
									src={teacher.imageSrc}
									alt={teacher.imageAlt}
									width={200}
									height={282}
									priority
								/>
							</SC.ImageWrapper>
							<SC.TeacherName>{teacher.name}</SC.TeacherName>
							<SC.TeacherBio>{teacher.bio}</SC.TeacherBio>
						</SC.TeacherCard>
					</Link>
				))}
			</SC.TeachersGrid>
		</SC.TeachersSection>
	);
};
