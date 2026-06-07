import React from "react";
import { Link, useParams } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "../components/ui";
import { MOCK_SUBJECTS } from "../mockData";

export function LevelView() {
  const { subjectId, levelId } = useParams();

  const subject = MOCK_SUBJECTS.find(
    (s) => s.id === subjectId
  );

  const level = subject?.levels.find(
    (l) => l.id === levelId
  );

  if (!subject || !level) {
    return <div>Niveau introuvable</div>;
  }

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          {subject.name}
        </h1>

        <p className="text-slate-500">
          {level.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {level.classes.map((classe) => (
          <Card key={classe.id}>
            <CardHeader>
              <CardTitle>{classe.name}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              <div>
                <p>
                  <strong>Étudiants :</strong>{" "}
                  {classe.students}
                </p>

                <p>
                  <strong>Moyenne :</strong>{" "}
                  {classe.avg}/20
                </p>

                <p>
                  <strong>Réussite :</strong>{" "}
                  {classe.successRate}%
                </p>
              </div>

              <Link
                to={`/groups/${subject.id}/${level.id}/${classe.id}`}
              >
                <Button className="w-full">
                  Voir Dashboard
                </Button>
              </Link>

            </CardContent>
          </Card>
        ))}

      </div>

    </div>
  );
}