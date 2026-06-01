import React from "react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, Button } from "../components/ui";
import { MOCK_SUBJECTS } from "../mockData";

export function GroupsView() {
  return (
    <div className="space-y-6">

      {/* Titre */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Mes Matières
        </h1>

        <p className="text-slate-500 mt-1">
          Sélectionnez une matière puis un niveau.
        </p>
      </div>

      {/* Liste des matières */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {MOCK_SUBJECTS.map((subject) => (
          <Card key={subject.id}>
            <CardHeader>
              <CardTitle>{subject.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-2">

                {subject.levels.map((level) => (
                  <Link
                    key={level.id}
                    to={`/groups/${subject.id}/${level.id}`}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                    >
                      {level.name}
                    </Button>
                  </Link>
                ))}

              </div>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  );
}